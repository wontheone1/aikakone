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
  (/ (- (.-innerHeight js/window) puzzle-height) 4))
(def row-num 5)
(def col-num 5)
(defn- get-piece-width [puzzle-width]
  (/ puzzle-width col-num))
(defn- get-piece-height [puzzle-height]
  (/ puzzle-height row-num))
(def button-sprite-sheet-width (atom nil))
(def button-sprite-sheet-height (atom nil))
(defn- get-button-width [sheet-width]
  (/ sheet-width 3))
(defn- get-button-height [sheet-height]
  (/ sheet-height 2))
(def sprites (atom {}))

(def game (atom nil))

(defn- preload []
  (.spritesheet
    (.-load @game)
    "puzzle"
    "images/puzzle-image.jpg"
    (get-piece-width @puzzle-image-width)
    (get-piece-height @puzzle-image-height)
    (* row-num col-num))
  (.spritesheet
    (.-load @game)
    "flip-buttons"
    "images/control-buttons.png"
    (get-button-width @button-sprite-sheet-width)
    (get-button-height @button-sprite-sheet-height)
    6))

(defn- create []
  (let [game-object-factory (.-add @game)
        puzzle-width-height (int (* 0.7 (min (.-innerWidth js/window)
                                             (.-innerHeight js/window))))
        left-margin (left-margin puzzle-width-height)
        top-margin (top-margin puzzle-width-height)
        piece-width (get-piece-width puzzle-width-height)
        piece-height (get-piece-height puzzle-width-height)
        button-width (get-button-width @button-sprite-sheet-width)
        button-height (get-button-height @button-sprite-sheet-height)
        make-buttons-same-size-as-puzzle-piece! (fn [sprite]
                                                  (.setTo
                                                    (.-scale sprite)
                                                    (/ piece-width button-width)
                                                    (/ piece-height button-height)))
        set-on-click-callback! (fn [sprite callback-fn]
                                 (set! (.-inputEnabled sprite) true)
                                 (.add
                                   (.-onInputDown (.-events sprite))
                                   callback-fn))]
    (doseq [row (range row-num)
            col (range col-num)
            :let [frame-id (+ (* col-num row) col)
                  x-pos (+ (* piece-width col) left-margin col)
                  y-pos (+ (* piece-height row) top-margin row)]]
      (when
        (and (zero? col) (= row (dec row-num)))
        (let [bottom-left-button (.sprite
                                   game-object-factory
                                   (- x-pos piece-width)
                                   (+ y-pos piece-height)
                                   "flip-buttons"
                                   5)]
          (make-buttons-same-size-as-puzzle-piece! bottom-left-button)
          (set-on-click-callback!
            bottom-left-button
            (fn []
              (println "bottom-left-button clicked")
              (doseq [row (range row-num)
                      :let [col (- (dec col-num) row)]]
                (.setTo (.-scale (@sprites [row col])) 0 0))))))
      (when (zero? col)
        (let [left-button (.sprite
                                   game-object-factory
                                   (- x-pos piece-width)
                                   y-pos
                                   "flip-buttons"
                                   row)]
          (make-buttons-same-size-as-puzzle-piece! left-button)
          (set-on-click-callback!
            left-button
            (fn [] (println (str "left-button row #" row " clicked"))))))
      (when (= row (dec row-num))
        (let [bottom-button (.sprite
                              game-object-factory
                              x-pos
                              (+ y-pos piece-height)
                              "flip-buttons"
                              col)]
          (make-buttons-same-size-as-puzzle-piece! bottom-button)
          (set-on-click-callback!
            bottom-button
            (fn [] (println (str "bottom-button col #" col " clicked"))))))
      (let [piece (.sprite
                    game-object-factory
                    x-pos
                    y-pos
                    "puzzle"
                    frame-id)]
        (swap! sprites assoc [col row] piece)
        (.setTo
          (.-scale piece)
          (/ puzzle-width-height @puzzle-image-width)
          (/ puzzle-width-height @puzzle-image-height))))))

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
