(ns hello-world.core
  (:require [goog.events :as events]
            [hello-world.web-socket :as web-sck]
            [nightlight.repl-server]
            [play-cljs.core :as p]
            ))

(enable-console-print!)

(def image-width 360)
(def image-height 360)
(def column-number 6)
(def row-number 6)
(def piece-width (/ image-width column-number))
(def piece-height (/ image-height row-number))
(def puzzle-image-url "images/puzzle-image.jpg")

(defonce game (p/create-game (.-innerWidth js/window) (.-innerHeight js/window)))
(defonce state (atom {}))

(def main-screen
  (reify p/Screen
    (on-show [this]
      (reset! state {:text-x 20 :text-y 30}))
    (on-hide [this])
    (on-render [this]
      (p/render game
                (concat
                  [[:fill {:color "lightblue"}
                    [:rect {:x 0 :y 0 :width (.-innerWidth js/window) :height (.-innerHeight js/window)}]]
                   [:fill {:color "black"}
                    [:text {:value "Hello, world!" :x (:text-x @state) :y (:text-y @state)
                            :size  16 :font "Georgia" :style :italic}]]]
                  (for [col (range column-number)
                        row (range row-number)
                        :let [sx (* col piece-width)
                              sy (* row piece-height)]]
                    [:image {:name  puzzle-image-url :x (+ sx 50 (* 3 col)) :y (+ sy 50 (* 3 row))
                             :sx    sx :sy sy :swidth piece-width :sheight piece-height
                             :width piece-width :height piece-height}]))))))

(events/listen js/window "mousemove"
  (fn [event]
    (swap! state assoc :text-x (.-clientX event) :text-y (.-clientY event))
    (let [{:keys [text-x text-y]} @state]
      (web-sck/chsk-send!
        [:aikakone/mouse-moved {:x text-x :y text-y}]
        3000))))

(events/listen js/window "resize"
  (fn [event]
    (p/set-size game js/window.innerWidth js/window.innerHeight)))

(doto game
  (p/start)
  (p/set-screen main-screen))

(web-sck/start-router state)