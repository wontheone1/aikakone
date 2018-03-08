(ns hello-world.game
  (:require [hello-world.util :as util]))

(def row-col-num 5)

(defn- get-piece-width-height [puzzle-width-height]
  (/ puzzle-width-height row-col-num))

(defn- randomly-execute-a-fn [f]
  (when (< (rand) 0.5) (f)))

(defn- preload []
  (.spritesheet
    (.-load @util/game)
    "puzzle"
    "images/puzzle-image.jpg"
    (get-piece-width-height @util/puzzle-image-width)
    (get-piece-width-height @util/puzzle-image-height)
    (* row-col-num row-col-num))
  (.spritesheet
    (.-load @util/game)
    "flip-buttons"
    "images/control-buttons.png"
    (util/get-button-width)
    (util/get-button-height)
    6))

(defn- make-buttons-same-size-as-puzzle-piece! [sprite]
  (let [piece-width-height (get-piece-width-height (:puzzle-width-height @util/game-state))]
    (.setTo
      (.-scale sprite)
      (/ piece-width-height (util/get-button-width))
      (/ piece-width-height (util/get-button-height)))))

(defn- toggle-visibility-and-flipped-state! [col row]
  (let [piece-scale (.-scale ((:sprites @util/game-state) [col row]))]
    (if (zero? (.-x piece-scale))
      (do
        (swap!
          util/game-state
          update
          :sprites-state
          assoc
          [col row]
          util/non-flipped-state)
        (.setTo
          piece-scale
          (:piece-x-scale @util/game-state)
          (:piece-y-scale @util/game-state)))
      (do
        (swap!
          util/game-state
          update
          :sprites-state
          assoc
          [col row]
          util/flipped-state)
        (.setTo piece-scale 0 0)))))

(defn flip-row! [row]
  (doseq [col (range row-col-num)]
    (toggle-visibility-and-flipped-state! col row)))

(defn flip-col! [col]
  (doseq [row (range row-col-num)]
    (toggle-visibility-and-flipped-state! col row)))

(defn flip-diagonal-pieces! []
  (doseq [row (range row-col-num)
          :let [col (- (dec row-col-num) row)]]
    (toggle-visibility-and-flipped-state! col row)))

(defn- randomize-puzzle []
  (randomly-execute-a-fn flip-diagonal-pieces!)
  (doseq [row-or-col (range row-col-num)]
    (randomly-execute-a-fn (fn [] (js/setTimeout (fn [] (flip-row! row-or-col)) 200)))
    (randomly-execute-a-fn (fn [] (js/setTimeout (fn [] (flip-col! row-or-col)) 200)))))

(defn- create-create [send-sprites-state-fn! initial-sprites-state]
  (fn []
    (let [game-object-factory (.-add @util/game)
          left-margin (util/left-margin)
          top-margin (util/top-margin)
          piece-width-height (get-piece-width-height (:puzzle-width-height @util/game-state))
          set-on-click-callback! (fn [sprite callback-fn]
                                   (set! (.-inputEnabled sprite) true)
                                   (.add
                                     (.-onInputDown (.-events sprite))
                                     callback-fn))]
      (doseq [row (range row-col-num)
              col (range row-col-num)
              :let [frame-id (+ (* row-col-num row) col)
                    x-pos (+ (* piece-width-height col) left-margin col)
                    y-pos (+ (* piece-width-height row) top-margin row)]]
        (let [piece (.sprite
                      game-object-factory
                      x-pos
                      y-pos
                      "puzzle"
                      frame-id)]
          (swap! util/game-state update :sprites assoc [col row] piece)
          (swap! util/game-state update :sprites-state assoc [col row] util/non-flipped-state)
          (.setTo (.-scale piece) (:piece-x-scale @util/game-state) (:piece-y-scale @util/game-state)))
        (when
          (and (zero? col) (= row (dec row-col-num)))
          (let [bottom-left-button (.sprite
                                     game-object-factory
                                     (- x-pos piece-width-height)
                                     (+ y-pos piece-width-height)
                                     "flip-buttons"
                                     5)]
            (make-buttons-same-size-as-puzzle-piece! bottom-left-button)
            (set-on-click-callback!
              bottom-left-button
              (fn []
                (println "bottom-left-button clicked")
                (flip-diagonal-pieces!)
                (send-sprites-state-fn!)
                (util/show-congrat-message-when-puzzle-is-complete!)))))
        (when (zero? col)
          (let [left-button (.sprite
                              game-object-factory
                              (- x-pos piece-width-height)
                              y-pos
                              "flip-buttons"
                              row)]
            (make-buttons-same-size-as-puzzle-piece! left-button)
            (set-on-click-callback!
              left-button
              (fn []
                (println (str "left-button row #" row " clicked"))
                (flip-row! row)
                (send-sprites-state-fn!)
                (util/show-congrat-message-when-puzzle-is-complete!)))))
        (when (= row (dec row-col-num))
          (let [bottom-button (.sprite
                                game-object-factory
                                x-pos
                                (+ y-pos piece-width-height)
                                "flip-buttons"
                                col)]
            (make-buttons-same-size-as-puzzle-piece! bottom-button)
            (set-on-click-callback!
              bottom-button
              (fn []
                (println (str "bottom-button col #" col " clicked"))
                (flip-col! col)
                (send-sprites-state-fn!)
                (util/show-congrat-message-when-puzzle-is-complete!))))))
      (if (nil? initial-sprites-state)
        (do
          (randomize-puzzle)
          (js/setTimeout send-sprites-state-fn! 300))
        (util/synchronize-puzzle-board initial-sprites-state)))))

(defn- update [])

(defn- start-game! [send-sprites-state-fn! initial-sprites-state]
  (println "starting game")
  (reset! util/game
          (js/Phaser.Game.
            (.-innerWidth js/window)
            (.-innerHeight js/window)
            js/Phaser.Auto
            ""
            ; ^ id of the DOM element to insert canvas. As we've left it blank it will simply be appended to body.
            (clj->js {:preload preload
                      :create  (create-create send-sprites-state-fn! initial-sprites-state)
                      :update  update}))))
