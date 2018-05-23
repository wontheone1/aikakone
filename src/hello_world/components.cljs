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

;- View Functions -

(defn go-back-to-game-button []
  [ui/mui-theme-provider
   {:muiTheme (get-mui-theme {:palette {:textColor (color :blue200)}})}
   [ui/raised-button {:label    "Play game"
                      :on-click #(rf/dispatch [:screen-change :game])}]])

(defn ranking-dashboard []
  (go (let [response (<! (http/get (str config/protocol-to-backend "://" config/backend-host "/rankings")))
            ranking (:body response)]
        (rf/dispatch [:ranking (util/parse-json ranking)])))
  (let [ranking @(rf/subscribe [:ranking])]
    [:div
     [go-back-to-game-button]
     [ui/mui-theme-provider
      {:muiTheme (get-mui-theme {:palette {:textColor (color :blue200)}})}
      [ui/table
       [ui/table-header {:displaySelectAll false :adjustForCheckbox false}
        [ui/table-row
         [ui/table-header-column "Ranking"]
         [ui/table-header-column "Time Record"]]]
       (apply conj
              [ui/table-body {:displayRowCheckbox false}]
              (for [rank (range (count ranking))]
                [ui/table-row
                 [ui/table-row-column (inc rank)]
                 [ui/table-row-column (ranking rank)]]))]]]))

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
     :reagent-render      (fn [this] [:div#canvas])}))

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
         [:img {:style    {:position         "absolute"
                           :background-color "white"
                           :z-index          "3"}
                :src      "images/aikakone-intro.png"
                :width    "100%"
                :height   "100%"
                :on-click util/show-puzzle-selection!}]
         [puzzle-selection-view]]

        (= :puzzle-selection @(rf/subscribe [:screen]))
        [puzzle-selection-view]

        (= :ranking-dashboard @(rf/subscribe [:screen]))
        [ranking-dashboard]))))
