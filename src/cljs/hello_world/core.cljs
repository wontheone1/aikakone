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
(def row-col-num 5)
(defn- get-piece-width-height [puzzle-width-height]
  (/ puzzle-width-height row-col-num))
(def button-sprite-sheet-width (atom nil))
(def button-sprite-sheet-height (atom nil))
(defn- get-button-width [sheet-width]
  (/ sheet-width 3))
(defn- get-button-height [sheet-height]
  (/ sheet-height 2))
(defonce game-state (atom {:sprites       {}
                           :sprites-state {}}))
(def flipped-state "FLIPPED")
(def non-flipped-state "NON-FLIPPED")

(def game (atom nil))

(defn- preload []
  (.spritesheet
    (.-load @game)
    "puzzle"
    "images/puzzle-image.jpg"
    (get-piece-width-height @puzzle-image-width)
    (get-piece-width-height @puzzle-image-height)
    (* row-col-num row-col-num))
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
        piece-x-scale (/ puzzle-width-height @puzzle-image-width)
        piece-y-scale (/ puzzle-width-height @puzzle-image-height)
        left-margin (left-margin puzzle-width-height)
        top-margin (top-margin puzzle-width-height)
        piece-width (get-piece-width-height puzzle-width-height)
        piece-height (get-piece-width-height puzzle-width-height)
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
                                   callback-fn))
        toggle-visibility-and-flipped-state! (fn [col row]
                                               (let [piece-scale (.-scale ((:sprites @game-state) [col row]))]
                                                 (if (zero? (.-x piece-scale))
                                                   (do
                                                     (swap!
                                                       game-state
                                                       update
                                                       :sprites-state
                                                       assoc
                                                       [col row]
                                                       non-flipped-state)
                                                     (.setTo piece-scale piece-x-scale piece-y-scale))
                                                   (do
                                                     (swap!
                                                       game-state
                                                       update
                                                       :sprites-state
                                                       assoc
                                                       [col row]
                                                       flipped-state)
                                                     (.setTo piece-scale 0 0)))))
        randomly-execute-a-fn (fn [f]
                                (when (< (rand) 0.5) (f)))]
    (doseq [row (range row-col-num)
            col (range row-col-num)
            :let [frame-id (+ (* row-col-num row) col)
                  x-pos (+ (* piece-width col) left-margin col)
                  y-pos (+ (* piece-height row) top-margin row)]]
      (let [piece (.sprite
                    game-object-factory
                    x-pos
                    y-pos
                    "puzzle"
                    frame-id)]
        (swap! game-state update :sprites assoc [col row] piece)
        (swap! game-state update :sprites-state assoc [col row] non-flipped-state)
        (.setTo (.-scale piece) piece-x-scale piece-y-scale))
      (when
        (and (zero? col) (= row (dec row-col-num)))
        (let [bottom-left-button (.sprite
                                   game-object-factory
                                   (- x-pos piece-width)
                                   (+ y-pos piece-height)
                                   "flip-buttons"
                                   5)
              flip-diagonal-pieces! (fn []
                                     (doseq [row (range row-col-num)
                                             :let [col (- (dec row-col-num) row)]]
                                       (toggle-visibility-and-flipped-state! col row)))]
          (make-buttons-same-size-as-puzzle-piece! bottom-left-button)
          (set-on-click-callback!
            bottom-left-button
            (fn []
              (println "bottom-left-button clicked")
              (flip-diagonal-pieces!)
              (web-sck/send-sprites-state!)))
          (randomly-execute-a-fn flip-diagonal-pieces!)))
      (when (zero? col)
        (let [left-button (.sprite
                                   game-object-factory
                                   (- x-pos piece-width)
                                   y-pos
                                   "flip-buttons"
                                   row)
              flip-row! (fn []
                          (doseq [col (range row-col-num)]
                            (toggle-visibility-and-flipped-state! col row)))]
          (make-buttons-same-size-as-puzzle-piece! left-button)
          (set-on-click-callback!
            left-button
            (fn []
              (println (str "left-button row #" row " clicked"))
              (flip-row!)
              (web-sck/send-sprites-state!)))
          (randomly-execute-a-fn (fn [] (js/setTimeout flip-row! 200)))))
      (when (= row (dec row-col-num))
        (let [bottom-button (.sprite
                              game-object-factory
                              x-pos
                              (+ y-pos piece-height)
                              "flip-buttons"
                              col)
              flip-col! (fn []
                          (doseq [row (range row-col-num)]
                            (toggle-visibility-and-flipped-state! col row)))]
          (make-buttons-same-size-as-puzzle-piece! bottom-button)
          (set-on-click-callback!
            bottom-button
            (fn []
              (println (str "bottom-button col #" col " clicked"))
              (flip-col!)
              (web-sck/send-sprites-state!)))
          (randomly-execute-a-fn (fn [] (js/setTimeout flip-col! 200))))))))

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

(web-sck/start-router game-state)

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
