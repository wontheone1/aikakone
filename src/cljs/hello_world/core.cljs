(ns hello-world.core
  (:require [hello-world.components :as view]
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

; - Entry Point -

(r/render [view/app]
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
