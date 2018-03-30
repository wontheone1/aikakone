(ns hello-world.game
  (:require [hello-world.util :as util]))

(defn- get-piece-width-height [puzzle-width-height]
  (/ puzzle-width-height util/row-col-num))

(defn- randomly-execute-a-fn [f]
  (when (< (rand) 0.5) (f)))

(defn- preload []
  (.image
    (.-load @util/game)
    "reset-button"
    "images/reset-button.jpg")
  (.image
    (.-load @util/game)
    "play-button"
    "images/play-button.png")
  (.image
    (.-load @util/game)
    "see-ranking-button"
    "images/ranking.png")
  (.spritesheet
    (.-load @util/game)
    "puzzle"
    "images/puzzle-image.jpg"
    (get-piece-width-height @util/puzzle-image-width)
    (get-piece-width-height @util/puzzle-image-height)
    (* util/row-col-num util/row-col-num))
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
          assoc-in
          [:sprites-state [col row]]
          util/non-flipped-state)
        (.setTo
          piece-scale
          (:piece-x-scale @util/game-state)
          (:piece-y-scale @util/game-state)))
      (do
        (swap!
          util/game-state
          assoc-in
          [:sprites-state [col row]]
          util/flipped-state)
        (.setTo piece-scale 0 0)))))

(defn flip-row! [row]
  (doseq [col (range util/row-col-num)]
    (toggle-visibility-and-flipped-state! col row)))

(defn flip-col! [col]
  (doseq [row (range util/row-col-num)]
    (toggle-visibility-and-flipped-state! col row)))

(defn flip-diagonal-pieces! []
  (doseq [row (range util/row-col-num)
          :let [col (- (dec util/row-col-num) row)]]
    (toggle-visibility-and-flipped-state! col row)))

(defn- randomize-puzzle []
  (randomly-execute-a-fn flip-diagonal-pieces!)
  (doseq [row-or-col (range util/row-col-num)]
    (randomly-execute-a-fn (fn [] (js/setTimeout (fn [] (flip-row! row-or-col)) 200)))
    (randomly-execute-a-fn (fn [] (js/setTimeout (fn [] (flip-col! row-or-col)) 200)))))

(declare create-puzzle-board)

(defn make-play-button! [websocket-message-send-functions]
  (swap!
    util/game-state
    assoc
    :play-button
    (this-as this
      (.button
        (.-add @util/game)
        10
        10
        "play-button"
        (fn []
          (util/destroy-stage-clear-text!)
          (create-puzzle-board websocket-message-send-functions)
          (js/setTimeout (:send-sprites-state-fn! websocket-message-send-functions) 300))
        this))))

(defn- create-puzzle-board [{:keys [send-sprites-state-fn!
                                    send-puzzle-complete-fn!
                                    send-start-timer-fn!]}]
  (util/show-reset-button!)
  (util/hide-play-button!)
  (util/hide-see-ranking-button!)
  (when (empty? (:sprites @util/game-state))
    (let [game-object-factory (.-add @util/game)
          left-margin (util/left-margin)
          top-margin (util/top-margin)
          piece-width-height (get-piece-width-height (:puzzle-width-height @util/game-state))
          set-on-click-callback! (fn [sprite callback-fn]
                                   (set! (.-inputEnabled sprite) true)
                                   (.add
                                     (.-onInputDown (.-events sprite))
                                     callback-fn))]
      (doseq [row (range util/row-col-num)
              col (range util/row-col-num)
              :let [frame-id (+ (* util/row-col-num row) col)
                    x-pos (+ (* piece-width-height col) left-margin col)
                    y-pos (+ (* piece-width-height row) top-margin row)]]
        (let [piece (.sprite
                      game-object-factory
                      x-pos
                      y-pos
                      "puzzle"
                      frame-id)]
          (swap! util/game-state assoc-in [:sprites [col row]] piece)
          (.setTo (.-scale piece) 0 0))
        (when
          (and (zero? col) (= row (dec util/row-col-num)))
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
                (when (util/currently-playing-game?)
                  (flip-diagonal-pieces!)
                  (send-sprites-state-fn!)
                  (util/finish-game-when-puzzle-is-complete!
                    send-puzzle-complete-fn!))))))
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
                (when (util/currently-playing-game?)
                  (flip-row! row)
                  (send-sprites-state-fn!)
                  (util/finish-game-when-puzzle-is-complete!
                    send-puzzle-complete-fn!))))))
        (when (= row (dec util/row-col-num))
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
                (when (util/currently-playing-game?)
                  (flip-col! col)
                  (send-sprites-state-fn!)
                  (util/finish-game-when-puzzle-is-complete!
                    send-puzzle-complete-fn!)))))))))
  (let [initial-sprites-state (:sprites-state @util/game-state)]
    (if (not (empty? initial-sprites-state))
      (util/synchronize-puzzle-board initial-sprites-state)
      (do
        (randomize-puzzle)
        (send-start-timer-fn!))))
  (util/show-play-time!))

(defn- create-create [websocket-message-send-functions]
  (fn []
    (when-not (:play-button @util/game-state)
      (make-play-button! websocket-message-send-functions)
      (util/make-see-ranking-button!)
      (util/make-reset-button! (:send-reset-fn! websocket-message-send-functions)))))

(defn- update [] )

(defn- start-game! [websocket-message-send-functions]
  (println "starting game")
  (reset! util/game
          (js/Phaser.Game.
            (.-innerWidth js/window)
            (.-innerHeight js/window)
            js/Phaser.Auto
            "canvas"
            ; ^ id of the DOM element to insert canvas. As we've left it blank it will simply be appended to body.
            (clj->js {:preload preload
                      :create  (create-create websocket-message-send-functions)
                      :update  update}))))
