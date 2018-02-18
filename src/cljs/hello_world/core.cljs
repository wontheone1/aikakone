(ns hello-world.core
  (:require [goog.events :as events]
            [hello-world.web-socket :as web-sck]
            [nightlight.repl-server]
            ))

(enable-console-print!)

(def puzzle-image-width (atom nil))
(def puzzle-image-height (atom nil))
(defn- left-margin [puzzle-width]
  (/ (- (.-innerWidth js/window) puzzle-width) 2))
(defn- top-margin [puzzle-height]
  (/ (- (.-innerHeight js/window) puzzle-height) 2))
(def row-num 5)
(def col-num 5)
(defn- piece-width [puzzle-width]
  (/ @puzzle-width col-num))
(defn- piece-height [puzzle-height]
  (/ @puzzle-height row-num))
(def button-sprite-sheet-width (atom nil))
(def button-sprite-sheet-height (atom nil))
(defn- button-width [sheet-width]
  (/ @sheet-width 3))
(defn- button-height [sheet-height]
  (/ @sheet-height 2))
(def sprites (atom {}))

(def game (atom nil))

(defn- preload []
  (.spritesheet
    (.-load @game)
    "puzzle"
    "images/puzzle-image.jpg"
    (piece-width puzzle-image-width)
    (piece-height puzzle-image-height)
    (* row-num col-num))
  (.spritesheet
    (.-load @game)
    "flip-buttons"
    "images/control-buttons.png"
    (button-width button-sprite-sheet-width)
    (button-height button-sprite-sheet-height)
    6))

(defn- create []
  (let [game-object-factory (.-add @game)
        left-margin (left-margin @puzzle-image-width)
        top-margin (top-margin @puzzle-image-height)
        piece-width (piece-width puzzle-image-width)
        piece-height (piece-height puzzle-image-height)
        button-width (button-width button-sprite-sheet-width)
        button-height (button-height button-sprite-sheet-height)]
    (doseq [row (range row-num)
            col (range col-num)
            :let [frame-id (+ (* col-num row) col)
                  x-pos (+ (* piece-width col) left-margin col)
                  y-pos (+ (* piece-height row) top-margin row)]]
      (swap! sprites
             assoc
             [x-pos y-pos]
             (.sprite
               game-object-factory
               x-pos
               y-pos
               "puzzle"
               frame-id)))
    (doseq [i (range 6)]
      (.setTo
        (.-scale
          (.sprite
            game-object-factory
            (* i button-width)
            (* i button-height)
            "flip-buttons"
            i))
        (/ piece-width button-width)
        (/ piece-height button-height)))))

(defn- update [])

(defn- start-game! []
  (println "starting game")
  (reset! game
          (js/Phaser.Game.
            (.-innerWidth js/window)
            (.-innerHeight js/window)
            js/Phaser.Auto
            ""
            ; ^ id of the DOM element to insert canvas. As we've left it blank it will simply be appended to body.
            (clj->js {:preload preload :create create :update update}))))


(defonce state (atom {}))

(web-sck/start-router state)

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
        (reset! button-sprite-sheet-width (.-width buttons-img))
        (reset! button-sprite-sheet-height (.-height buttons-img))
        (println "buttons image loaded")
        (set! (.-src puzzle-img) "images/puzzle-image.jpg"))))
  (set!
    (.-onload puzzle-img)
    (clj->js
      (fn []
        (reset! puzzle-image-width (.-width puzzle-img))
        (reset! puzzle-image-height (.-height puzzle-img))
        (println "Puzzle image loaded")
        (start-game!))))                                    ; start game after loading image
  (set! (.-src buttons-img) "images/control-buttons.png")
  (println "loading images"))
