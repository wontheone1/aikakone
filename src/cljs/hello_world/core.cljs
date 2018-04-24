(ns hello-world.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljsjs.material-ui]
            [cljs-react-material-ui.core :refer [get-mui-theme color]]
            [cljs-react-material-ui.reagent :as ui]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [hello-world.web-socket :as web-sck]
            [nightlight.repl-server]
            [hello-world.util :as util]
            [reagent.core :as r]
            [re-frame.core :as rf]
            ))

(enable-console-print!)

;- Event Handlers -

(rf/reg-event-db
  :ranking
  (fn [db [_ ranking]]
    (assoc db :ranking ranking)))

(rf/reg-event-db
  :screen-change
  (fn [db [_ screen]]
    (assoc db :screen screen)))

;- Query  -

(rf/reg-sub
  :screen
  (fn [db _]
    (:screen db)))

(rf/reg-sub
  :ranking
  (fn [db _]
    (:ranking db)))

;- View Functions -

(defn go-back-to-game-button []
  [ui/mui-theme-provider
   {:muiTheme (get-mui-theme {:palette {:textColor (color :blue200)}})}
   [ui/raised-button {:label    "Play game"
                      :on-click #(do
                                   (util/show-game!))}]])

(defn ranking-dashboard []
  (when (= :ranking-dashboard @(rf/subscribe [:screen]))
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
                   [ui/table-row-column (ranking rank)]]))]]])))

; - Entry Point -

(r/render [ranking-dashboard]
          (.getElementById js/document "app"))

; this is the game program's entry point
(let [puzzle-img (js/Image.)
      buttons-img (js/Image.)]
  ; finding out size of image. https://stackoverflow.com/a/626505/5802173
  ; image loading is done asynchronously. The way to start the game after image is loaded is
  ; we start the game in `onload` callback of the image. After loading buttons-img first,
  ; start loading puzzle image then start the game.
  (set!
    (.-onload buttons-img)
    (clj->js
      (fn []
        (reset! util/button-sprite-sheet-width (.-width buttons-img))
        (reset! util/button-sprite-sheet-height (.-height buttons-img))
        (set! (.-src puzzle-img) "images/puzzle-image.jpg"))))
  (set!
    (.-onload puzzle-img)
    (clj->js
      (fn []
        (reset! util/puzzle-image-width (.-width puzzle-img))
        (reset! util/puzzle-image-height (.-height puzzle-img))
        (swap! util/game-state assoc :puzzle-width-height (int (* 0.7 (min (.-innerWidth js/window)
                                                                           (.-innerHeight js/window)))))
        (swap! util/game-state assoc :piece-x-scale (/ (:puzzle-width-height @util/game-state)
                                                       @util/puzzle-image-width))
        (swap! util/game-state assoc :piece-y-scale (/ (:puzzle-width-height @util/game-state)
                                                       @util/puzzle-image-height))
        (web-sck/start-web-socket!))))                                    ; start game after loading image
  (set! (.-src buttons-img) "images/control-buttons.png"))
