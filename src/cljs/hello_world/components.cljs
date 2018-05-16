(ns hello-world.components
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljsjs.material-ui]
            [cljs-react-material-ui.core :refer [get-mui-theme color]]
            [cljs-react-material-ui.reagent :as ui]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [hello-world.game :as game]
            [hello-world.util :as util]
            [hello-world.web-socket :as web-socket]
            [re-frame.core :as rf]
            ))

(defn add-game-image-url! [search-word]
  (go (let [response (<! (http/get "https://api.finna.fi/v1/search"
                                   {:with-credentials? false
                                    :query-params      {"lookfor" search-word}}))]
        (rf/dispatch [:add-game-img-url
                      search-word
                      (str "https://api.finna.fi"
                           (-> (filter :images (get-in response [:body :records]))
                               first
                               :images
                               first))]))))

;- View Functions -

(defn go-back-to-game-button []
  [ui/mui-theme-provider
   {:muiTheme (get-mui-theme {:palette {:textColor (color :blue200)}})}
   [ui/raised-button {:label    "Play game"
                      :on-click util/show-game!}]])

(defn ranking-dashboard []
  (go (let [response (<! (http/get "http://localhost:2222/rankings"))
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
   [:ul
    [:li [:a {:href     "#"
              :on-click #(do
                           (add-game-image-url! "kirkko")
                           (util/show-game! "kirkko"))}
          "kirkko"]]
    [:li [:a {:href     "#"
              :on-click #(do
                           (add-game-image-url! "miehet")
                           (util/show-game! "miehet"))}
          "miehet"]]
    [:li [:a {:href     "#"
              :on-click #(do
                           (add-game-image-url! "naiset")
                           (util/show-game! "naiset"))}
          "naiset"]]
    [:li [:a {:href     "#"
              :on-click #(do
                           (add-game-image-url! "sotilas")
                           (util/show-game! "sotilas"))}
          "sotilas"]]
    [:li [:a {:href     "#"
              :on-click #(do
                           (add-game-image-url! "rauta")
                           (util/show-game! "rauta"))}
          "rauta"]]]])

(defn app []
  (let [search-word->game-img-url @(rf/subscribe [:search-word->game-img-url])
        game-img @(rf/subscribe [:game-img])]
    (if (and (= :game @(rf/subscribe [:screen]))
             (when search-word->game-img-url
               (string? (search-word->game-img-url game-img))))
      (do (let [canvas (.getElementById js/document "canvas")]
            (game/start-game!
              (search-word->game-img-url game-img)
              {:chsk-send-fn!            web-socket/chsk-send!
               :send-sprites-state-fn!   web-socket/send-sprites-state!
               :send-puzzle-complete-fn! web-socket/send-puzzle-complete!
               :send-reset-fn!           web-socket/send-reset!})
            (set! (.-display (.-style canvas)) "block"))
          [:div])
      (do
        (let [canvas (.getElementById js/document "canvas")]
          (set! (.-display (.-style canvas)) "none"))
        (cond
          (= :intro @(rf/subscribe [:screen]))
          [:img {:src      "images/aikakone-intro.png"
                 :width    "100%"
                 :height   "100%"
                 :on-click util/show-puzzle-selection!}]

          (= :puzzle-selection @(rf/subscribe [:screen]))
          [puzzle-selection-view]

          (= :ranking-dashboard @(rf/subscribe [:screen]))
          [ranking-dashboard])))))
