(ns hello-world.game
  (:require [hello-world.sound-effect :as sound]
            [hello-world.util :as util]
            ))

(defn- randomly-execute-a-fn [f]
  (when (< (rand) 0.5) (f)))

(defn- preload []
  (.image
    (.-load @util/game)
    "audio-button"
    "images/speaker.png")
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
    (util/get-piece-width-height @util/puzzle-image-width)
    (util/get-piece-width-height @util/puzzle-image-height)
    (* util/row-col-num util/row-col-num))
  (.spritesheet
    (.-load @util/game)
    "flip-buttons"
    "images/control-buttons.png"
    (util/get-button-width)
    (util/get-button-height)
    6))

(defn- toggle-visibility-and-flipped-state! [col row]
  (let [piece-flipped-state ((:sprites-state @util/game-state) [col row])
        piece-scale (.-scale ((:sprites @util/game-state) [col row]))
        game-object-factory (.-add @util/game)]
    (if (= util/flipped-state piece-flipped-state)
      (do
        (swap!
          util/game-state
          assoc-in
          [:sprites-state [col row]]
          util/non-flipped-state)
        (.to
          (.tween game-object-factory piece-scale)
          (clj->js {:x (:piece-x-scale @util/game-state)
                    :y (:piece-y-scale @util/game-state)})
          500
          js/Phaser.Easing.Linear.None
          true))
      (do
        (swap!
          util/game-state
          assoc-in
          [:sprites-state [col row]]
          util/flipped-state)
        (.to
          (.tween game-object-factory piece-scale)
          (clj->js {:x 0 :y 0})
          500
          js/Phaser.Easing.Linear.None
          true)))))

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

(defn make-play-button! [{:keys [chsk-send-fn!]}]
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
          (chsk-send-fn! [:aikakone/game-start])
          (util/destroy-stage-clear-text!))
        this))))

(defn- store-control-button-and-return-it [control-button]
  (swap! util/game-state update :control-buttons conj control-button)
  (set! (.-x (.-anchor control-button)) 0.5)
  (set! (.-y (.-anchor control-button)) 0.5)
  control-button)

(defn- create-puzzle-piece-and-store [{:keys [frame-id x-pos y-pos col row]}]
  (let [piece (.sprite
                (.-add @util/game)
                x-pos
                y-pos
                "puzzle"
                frame-id)]
    (swap! util/game-state assoc-in [:sprites [col row]] piece)
    (.setTo (.-scale piece) 0 0)
    (set! (.-x (.-anchor piece)) 0.5)
    (set! (.-y (.-anchor piece)) 0.5)))

(defn- create-puzzle-board [{:keys [send-sprites-state-fn!
                                    send-puzzle-complete-fn!
                                    send-start-timer-fn!]}]
  (util/show-reset-button!)
  (util/show-control-buttons!)
  (util/hide-play-button!)
  (util/hide-see-ranking-button!)
  (when (empty? (:sprites @util/game-state))
    (let [game-object-factory (.-add @util/game)
          left-margin (util/left-margin)
          top-margin (util/top-margin)
          piece-width-height (util/get-piece-width-height (:puzzle-width-height @util/game-state))
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
        (create-puzzle-piece-and-store {:frame-id frame-id
                                        :x-pos    x-pos
                                        :y-pos    y-pos
                                        :col      col
                                        :row      row})
        (when
          (and (zero? col) (= row (dec util/row-col-num)))
          (let [bottom-left-button (store-control-button-and-return-it
                                     (.sprite
                                       game-object-factory
                                       (- x-pos piece-width-height)
                                       (+ y-pos piece-width-height)
                                       "flip-buttons"
                                       5))]
            (util/make-buttons-same-size-as-puzzle-piece! bottom-left-button)
            (set-on-click-callback!
              bottom-left-button
              (fn []
                (when (util/currently-playing-game?)
                  (sound/play-beep! (sound/frequencies-in-major-scale-4th-octave util/row-col-num))
                  (flip-diagonal-pieces!)
                  (send-sprites-state-fn!)
                  (util/finish-game-when-puzzle-is-complete!
                    send-puzzle-complete-fn!))))))
        (when (zero? col)
          (let [left-button (store-control-button-and-return-it
                              (.sprite
                                game-object-factory
                                (- x-pos piece-width-height)
                                y-pos
                                "flip-buttons"
                                row))]
            (util/make-buttons-same-size-as-puzzle-piece! left-button)
            (set-on-click-callback!
              left-button
              (fn []
                (when (util/currently-playing-game?)
                  (sound/play-beep! (sound/frequencies-in-major-scale-4th-octave row))
                  (flip-row! row)
                  (send-sprites-state-fn!)
                  (util/finish-game-when-puzzle-is-complete!
                    send-puzzle-complete-fn!))))))
        (when (= row (dec util/row-col-num))
          (let [bottom-button (store-control-button-and-return-it
                                (.sprite
                                  game-object-factory
                                  x-pos
                                  (+ y-pos piece-width-height)
                                  "flip-buttons"
                                  col))]
            (util/make-buttons-same-size-as-puzzle-piece! bottom-button)
            (set-on-click-callback!
              bottom-button
              (fn []
                (when (util/currently-playing-game?)
                  (sound/play-beep! (sound/frequencies-in-major-scale-4th-octave
                                      (mod (+ 1 util/row-col-num col)
                                           (count sound/frequencies-in-major-scale-4th-octave))))
                  (flip-col! col)
                  (send-sprites-state-fn!)
                  (util/finish-game-when-puzzle-is-complete!
                    send-puzzle-complete-fn!)))))))))
  (let [initial-sprites-state (:sprites-state @util/game-state)]
    (if (not (empty? initial-sprites-state))
      (util/synchronize-puzzle-board initial-sprites-state)
      (do
        (swap! util/game-state assoc :sprites-state {})     ; prevent :sprites-state is nil when creating
                                                            ; puzzle board for the first time
        (randomize-puzzle)
        (send-start-timer-fn!))))
  (util/show-play-time!))

(defn- create-create [websocket-message-send-functions]
  (fn []
    (when-not (:play-button @util/game-state)
      (make-play-button! websocket-message-send-functions)
      (util/make-see-ranking-button!)
      (util/make-reset-button! (:send-reset-fn! websocket-message-send-functions))
      (util/make-audio-button!))))

(defn- game-update [] )

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
                      :update  game-update}))))
