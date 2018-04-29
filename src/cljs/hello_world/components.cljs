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

(defn image-src-of [search-word]
  (go (let [response (<! (http/get "https://api.finna.fi/v1/search"
                                   {:with-credentials? false
                                    :query-params      {"lookfor" search-word}}))]
        (rf/dispatch [:set-finna-img (str "https://api.finna.fi" (-> (filter :images (get-in response [:body :records]))
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

(defn create-fn-to-start-game-with-image-src [image-src]
  (fn []
    (game/start-game!
      image-src
      {:chsk-send-fn!  web-socket/chsk-send!
       :send-reset-fn! web-socket/send-reset!})
    (util/show-game!)))

(defn app []
  (if (= :game @(rf/subscribe [:screen]))
    (do (let [canvas (.getElementById js/document "canvas")]
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
        [:div
         [:img#finnaImg {:src @(rf/subscribe [:finna-img])}]
         [:ul
          [:li [:a
                {:href "#" :on-click (create-fn-to-start-game-with-image-src "images/puzzle-image.jpg")}
                "default"]]
          [:li [:a {:href     "#"
                    :on-click #(image-src-of "kirkko")}
                "kirkko"]]
          [:li [:a {:href     "#"
                    :on-click #(image-src-of "miehet")}
                "miehet"]]
          [:li [:a {:href     "#"
                    :on-click #(image-src-of "naiset")}
                "naiset"]]
          [:li [:a {:href     "#"
                    :on-click #(image-src-of "sotilas")}
                "sotilas"]]
          [:li [:a {:href     "#"
                    :on-click #(image-src-of "rauta")}
                "rauta"]]]]

        (= :ranking-dashboard @(rf/subscribe [:screen]))
        [ranking-dashboard]))))
