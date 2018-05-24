(ns hello-world.components
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljsjs.material-ui]
            [cljs-react-material-ui.core :refer [get-mui-theme color]]
            [cljs-react-material-ui.reagent :as ui]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [hello-world.config :as config]
            [hello-world.game :as game]
            [hello-world.util :as util]
            [hello-world.web-socket :as web-socket]
            [re-frame.core :as rf]
            [reagent.core :as r]
            ))

(def table-header-style
  {:style {:font-size        "3em"
           :font-weight      "700"
           :color            "#fff"
           :background-color "rgba(238, 108, 77, 0.7)"}})

(def table-body-style
  {:style {:font-size "2em"
           :color     "#696969"}})

;- View Functions -

(defn go-back-to-game-button []
  [ui/mui-theme-provider
   {:muiTheme (get-mui-theme (aget js/MaterialUIStyles "DarkRawTheme"))}
   [ui/raised-button {:label    "Play game"
                      :size     "large"
                      :on-click #(rf/dispatch [:screen-change :game])}]])

(defn ranking-dashboard []
  (go (let [response (<! (http/get (str config/protocol-to-backend "://" config/backend-host "/rankings")))
            ranking (:body response)]
        (rf/dispatch [:ranking (util/parse-json ranking)])))
  (let [ranking @(rf/subscribe [:ranking])]
    [:div {:style {:background-image "url(\"images/ranking-board-bg.png\")"
                   :width            "100%"
                   :height           "100%"}}
     [ui/mui-theme-provider
      {:muiTheme (get-mui-theme {:palette {:text-color (color :grey600)}})}
      [ui/table {:style {:background-color "rgba(255, 255, 255, 0.5)"}}
       [ui/table-header {:displaySelectAll false :adjustForCheckbox false}
        [ui/table-row
         [ui/table-header-column table-header-style "Ranking"]
         [ui/table-header-column table-header-style "Time Record"]]]
       (apply conj
              [ui/table-body {:displayRowCheckbox false}]
              (for [rank (range (count ranking))]
                [ui/table-row
                 [ui/table-row-column table-body-style (inc rank)]
                 [ui/table-row-column table-body-style (ranking rank)]]))]]
     [:div {:style {:display         "flex"
                    :justify-content "flex-end"}}
      [go-back-to-game-button]]]))

(defn- puzzle-selection-view []
  [:div
   [:img {:style  {:position "absolute"}
          :src    "images/puzzle-selection-bg.png"
          :width  "100%"
          :height "100%"}]
   [:img {:style  {:position "absolute"
                   :z-index  "2"
                   :right    "3%"
                   :bottom   "25%"
                   :width    "16%"}
          :src    "images/speech-bubble.png"}]
   (into [:ul]
         (map (fn [{:keys [search-word position-in-puzzle-selection-view]}]
                [:img
                 {:id       search-word
                  :style    {:position   "absolute"
                             :z-index    "1"
                             :box-shadow "7px 7px 5px grey"
                             :left       (:left position-in-puzzle-selection-view)
                             :top        (:top position-in-puzzle-selection-view)}
                  :src      (when-let [search-word->game-img-url @(rf/subscribe [:search-word->game-img-url])]
                              (search-word->game-img-url search-word ""))
                  :width    "20%"
                  :height   "26%"
                  :on-click #(util/show-game! search-word)}])
              util/puzzle-images))])

(defn game-screen [search-word->game-img-url game-img]
  (r/create-class
    {:component-did-mount #(game/start-game!
                             (search-word->game-img-url game-img)
                             {:chsk-send-fn!            web-socket/chsk-send!
                              :send-sprites-state-fn!   web-socket/send-sprites-state!
                              :send-puzzle-complete-fn! web-socket/send-puzzle-complete!
                              :send-reset-fn!           web-socket/send-reset!})
     :reagent-render      (fn [] [:div#canvas])}))

(defn app []
  (let [search-word->game-img-url @(rf/subscribe [:search-word->game-img-url])
        game-img @(rf/subscribe [:game-img])]
    (if (and (= :game @(rf/subscribe [:screen]))
             (= (count util/puzzle-images) (count search-word->game-img-url))
             (when search-word->game-img-url
               (string? (search-word->game-img-url game-img))))
      (do
        (swap! util/game-state merge util/initial-game-state)
        [game-screen search-word->game-img-url game-img])
      (cond
        (= :intro @(rf/subscribe [:screen]))
        [:div
         [:img {:style    {:position                  "fixed"
                           :z-index                   "4"
                           :width                     "20%"
                           :height                    "20%"
                           :right                     "50%"
                           :animation-name            "touchAnywhere"
                           :animation-duration        "2s"
                           :animation-iteration-count "infinite"
                           :animation-direction       "alternate"}
                :src      "images/touch-anywhere.png"
                :on-click util/show-puzzle-selection!}]
         [:img.background {:style    {:position         "absolute"
                                      :background-color "white"
                                      :z-index          "3"}
                           :src      "images/aikakone-intro.png"
                           :on-click util/show-puzzle-selection!}]
         [:div {:style {:display "none"}}
          [puzzle-selection-view]]]

        (= :puzzle-selection @(rf/subscribe [:screen]))
        [:div {:style {:display "block"}}
         [puzzle-selection-view]]

        (= :ranking-dashboard @(rf/subscribe [:screen]))
        [ranking-dashboard]))))
