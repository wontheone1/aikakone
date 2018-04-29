(ns hello-world.game
  (:require [hello-world.sound-effect :as sound]
            [hello-world.util :as util]
            ))

(defn- preload []
  (let [phaser-loader (.-load @util/game)]
    (.image
      phaser-loader
      "audio-button"
      "images/speaker.png")
    (.image
      phaser-loader
      "reset-button"
      "images/reset-button.jpg")
    (.image
      phaser-loader
      "play-button"
      "images/play-button.png")
    (.image
      phaser-loader
      "see-ranking-button"
      "images/ranking.png")
    (.spritesheet
      phaser-loader
      "puzzle"
      "images/puzzle-image.jpg"
      (util/get-piece-width-height @util/puzzle-image-width)
      (util/get-piece-width-height @util/puzzle-image-height)
      (* util/row-col-num util/row-col-num))
    (.spritesheet
      phaser-loader
      "flip-buttons"
      "images/control-buttons.png"
      (util/get-button-width)
      (util/get-button-height)
      6)))

(defn flip-row! [row]
  (swap! util/game-state update-in [:sprites-state :row-flipped? row] not))

(defn flip-col! [col]
  (swap! util/game-state update-in [:sprites-state :col-flipped? col] not))

(defn flip-diagonal-pieces! []
  (swap! util/game-state update-in [:sprites-state :diagonal-flipped?] not))

(declare create-puzzle-board)

(defn make-play-button! [{:keys [chsk-send-fn!]}]
  (swap!
    util/game-state
    assoc
    :play-button
    (this-as this
      (.. @util/game
          -add
          (button
            10
            10
            "play-button"
            (fn []
              (chsk-send-fn! [:aikakone/game-start])
              (util/destroy-stage-clear-text!))
            this)))))

(defn- store-control-button-and-return-it [control-button]
  (swap! util/game-state update :control-buttons conj control-button)
  (set! (.. control-button -anchor -x) 0.5)
  (set! (.. control-button -anchor -y) 0.5)
  control-button)

(defn- create-puzzle-piece-and-store [{:keys [frame-id x-pos y-pos row col]}]
  (let [piece (.. @util/game
                  -add
                  (sprite x-pos y-pos "puzzle" frame-id))]
    (swap! util/game-state assoc-in [:sprites [row col]] piece)
    (.. piece -scale (setTo 0 0))
    (set! (.. piece -anchor -x) 0.5)
    (set! (.. piece -anchor -y) 0.5)))

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
                                        :row      row
                                        :col      col})
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
                  (util/synchronize-puzzle-board! (:sprites-state @util/game-state))
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
                  (util/synchronize-puzzle-board! (:sprites-state @util/game-state))
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
                  (util/synchronize-puzzle-board! (:sprites-state @util/game-state))
                  (send-sprites-state-fn!)
                  (util/finish-game-when-puzzle-is-complete!
                    send-puzzle-complete-fn!)))))))))
  (util/synchronize-puzzle-board! (:sprites-state @util/game-state))
  (send-start-timer-fn!)
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
