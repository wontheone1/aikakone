(ns hello-world.core
  (:require [goog.events :as events]
            [hello-world.web-socket :as web-sck]
            [nightlight.repl-server]
            ))

(enable-console-print!)

(def window-width (atom (.-innerWidth js/window)))
(def window-height (atom (.-innerHeight js/window)))
(def puzzle-width (atom nil))
(def puzzle-height (atom nil))
(defn- left-margin [window-width]
  (/ (- @window-width @puzzle-width) 2))
(defn- top-margin [window-height]
  (/ (- @window-height @puzzle-height) 2))
(def row-num 5)
(def col-num 5)
(defn- piece-width [puzzle-width]
  (/ @puzzle-width col-num))
(defn- piece-height [puzzle-height]
  (/ @puzzle-height row-num))

(def game (atom nil))

(defn- preload []
  (.spritesheet
    (.-load @game)
    "puzzle"
    "images/puzzle-image.jpg"
    (piece-width puzzle-width)
    (piece-height puzzle-height)
    (* row-num col-num)))

(defn- create []
  (let [game-object-factory (.-add @game)
        left-margin (left-margin window-width)
        top-margin (top-margin window-height)
        piece-width (piece-width puzzle-width)
        piece-height (piece-height puzzle-height)]
    (doseq [row (range row-num)
            col (range col-num)
            :let [frame-id (+ (* col-num row) col)
                  x-pos (+ (* piece-width col) left-margin col)
                  y-pos (+ (* piece-height row) top-margin row)]]
      (.sprite
        game-object-factory
        x-pos
        y-pos
        "puzzle"
        frame-id))))

(defn- update [])

(defn- start-game! []
  (println "starting game")
  (reset! game
          (js/Phaser.Game.
            @window-width
            @window-height
            js/Phaser.Auto
            ""
            ; ^ id of the DOM element to insert canvas. As we've left it blank it will simply be appended to body.
            (clj->js {:preload preload :create create :update update}))))


(defonce state (atom {}))

(web-sck/start-router state)

; this is the game program's entry point
(let [puzzle-img (js/Image.)]
  ; finding out size of image. https://stackoverflow.com/a/626505/5802173
  ; image loading is done asynchronously. The way to start the game after image is loaded is
  ; we start the game in `onload` callback of the image.
  (set!
    (.-onload puzzle-img)
    (clj->js
      (fn []
        (reset! puzzle-width (.-width puzzle-img))
        (reset! puzzle-height (.-height puzzle-img))
        (println "Puzzle image loaded")
        (start-game!))))                                    ; start game after loading image
  (set! (.-src puzzle-img) "images/puzzle-image.jpg")
  (println "loading puzzle image"))
