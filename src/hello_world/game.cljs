(ns hello-world.game
  (:require [hello-world.sound-effect :as sound]
            [hello-world.util :as util]
            ))

(defn- create-preload [image-src]
  (fn []
    (set! (.. @util/game -scale -scaleMode) js/Phaser.ScaleManager.SHOW_ALL)
    (set! (.. @util/game -scale -pageAlignHorizontally) true)
    (set! (.. @util/game -scale -pageAlignVertically) true)
    (let [phaser-loader (.-load ^js/Phaser.Game @util/game)]
      (.image
        phaser-loader
        "puzzle-background"
        "images/puzzle-play-bg.png")
      (.image
        phaser-loader
        "puzzle-selection-button"
        "images/puzzle-selection-button.png")
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
        image-src
        (util/get-piece-width-height @util/puzzle-image-width)
        (util/get-piece-width-height @util/puzzle-image-height)
        (* util/row-col-num util/row-col-num))
      (.spritesheet
        phaser-loader
        "flip-buttons"
        "images/control-buttons.png"
        (util/get-button-width)
        (util/get-button-height)
        6))))

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
      (.. ^js/Phaser.Game @util/game
          -add
          (button
            10
            10
            "play-button"
            (fn []
              (chsk-send-fn! [:aikakone/game-start])
              (util/hide-stage-clear-text!))
            this)))))

(defn- store-control-button-and-return-it! [^js/Phaser.Sprite control-button]
  (swap! util/game-state update :control-buttons conj control-button)
  (.. control-button -scale (setTo 0 0))
  (set! (.. control-button -anchor -x) 0.5)
  (set! (.. control-button -anchor -y) 0.5)
  control-button)

(defn- create-puzzle-piece-and-store! [{:keys [frame-id x-pos y-pos row col]}]
  (let [piece (.. ^js/Phaser.Game @util/game
                  -add
                  (sprite x-pos y-pos "puzzle" frame-id))]
    (swap! util/game-state assoc-in [:sprites [row col]] piece)
    (.. piece -scale (setTo 0 0))
    (set! (.. piece -anchor -x) 0.5)
    (set! (.. piece -anchor -y) 0.5)))

(defn- show-puzzle-board! [{:keys [send-start-timer-fn!]}]
  (util/show-reset-button!)
  (util/show-control-buttons!)
  (util/hide-play-button!)
  (util/hide-see-ranking-button!)
  (util/synchronize-puzzle-board! (:sprites-state @util/game-state))
  (send-start-timer-fn!)
  (util/show-play-time!))

(defn- render-background []
  (set! (.. ^js/Phaser.Game @util/game -stage -backgroundColor) "#f6f4f3")
  (.. ^js/Phaser.Game @util/game -add (image 0 0 "puzzle-background")))

(defn- create-create [{:keys [send-sprites-state-fn!
                              send-puzzle-complete-fn!]
                       :as websocket-message-send-functions}]
  (fn []
    (render-background)
    (when-not (:play-button @util/game-state)
      (util/make-play-time!)
      (util/hide-play-time!)
      (util/make-congrat-message!)
      (util/hide-stage-clear-text!)
      (make-play-button! websocket-message-send-functions)
      (util/make-see-ranking-button!)
      (util/make-reset-button! (:send-reset-fn! websocket-message-send-functions))
      (util/make-audio-button!)
      (util/make-puzzle-selection-button!))
    (when (empty? (:sprites @util/game-state))
      (let [game-object-factory (.-add ^js/Phaser.Game @util/game)
            left-margin (util/left-margin)
            top-margin (util/top-margin)
            piece-width-height (util/get-piece-width-height (:puzzle-width-height @util/game-state))]
        (doseq [row (range util/row-col-num)
                col (range util/row-col-num)
                :let [frame-id (+ (* util/row-col-num row) col)
                      x-pos (+ (* piece-width-height col) left-margin col)
                      y-pos (+ (* piece-width-height row) top-margin row)]]
          (create-puzzle-piece-and-store! {:frame-id frame-id
                                           :x-pos     x-pos
                                           :y-pos     y-pos
                                           :row       row
                                           :col       col})
          (when
            (and (zero? col) (= row (dec util/row-col-num)))
            (let [bottom-left-button (store-control-button-and-return-it!
                                       (.sprite
                                         game-object-factory
                                         (- x-pos piece-width-height)
                                         (+ y-pos piece-width-height)
                                         "flip-buttons"
                                         5))]
              (util/set-on-click-callback-for-sprite!
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
            (let [left-button (store-control-button-and-return-it!
                                (.sprite
                                  game-object-factory
                                  (- x-pos piece-width-height)
                                  y-pos
                                  "flip-buttons"
                                  row))]
              (util/set-on-click-callback-for-sprite!
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
            (let [bottom-button (store-control-button-and-return-it!
                                  (.sprite
                                    game-object-factory
                                    x-pos
                                    (+ y-pos piece-width-height)
                                    "flip-buttons"
                                    col))]
              (util/set-on-click-callback-for-sprite!
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
                      send-puzzle-complete-fn!))))))
          (util/position-ui-elements!))))))

(defn- game-update [] )

(defn- start-game! [image-src websocket-message-send-functions]
  (let [puzzle-img (js/Image.)]
    ; finding out size of image. https://stackoverflow.com/a/626505/5802173
    ; image loading is done asynchronously. The way to start the game after image is loaded is
    ; we start the game in `onload` callback of the image. After loading buttons-img first,
    ; start loading puzzle image then start the game.
    (swap! util/game-state assoc :puzzle-width-height (int (* 0.7 (min (.-innerWidth js/window)
                                                                       (.-innerHeight js/window)))))
    (set!
      (.-onload puzzle-img)
      (clj->js
        (fn []
          (reset! util/puzzle-image-width (.-width puzzle-img))
          (reset! util/puzzle-image-height (.-height puzzle-img))
          (println (str "starting game with image from " image-src))
          (reset! util/game
                  (js/Phaser.Game.
                    (.-innerWidth js/window)
                    (.-innerHeight js/window)
                    js/Phaser.Canvas
                    "canvas" ; id of the DOM element to insert canvas.
                    (clj->js {:preload (create-preload image-src)
                              :create  (create-create websocket-message-send-functions)
                              :update  game-update}))))))
    (set! (.-src puzzle-img) image-src)))
