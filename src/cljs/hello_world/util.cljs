(ns hello-world.util
  (:require
    [re-frame.core :as rf]
    ))

(enable-console-print!)

(def row-col-num 5)

(defn parse-json [json-string]
  (js->clj (.parse js/JSON json-string)))

(def game (atom nil))

(defonce game-state (atom {:audio-on?           false
                           :sprites             {}
                           :sprites-state       {}
                           :play-button         nil
                           :control-buttons     []
                           :play-time           0.0
                           :play-time-text      nil
                           :puzzle-width-height 0
                           :piece-x-scale       0
                           :piece-y-scale       0
                           :see-ranking-button  nil
                           :stage-clear-text    nil}))

(def puzzle-image-width (atom nil))

(def puzzle-image-height (atom nil))

(def button-sprite-sheet-width (atom nil))

(def button-sprite-sheet-height (atom nil))

(defn- get-button-width []
  (/ @button-sprite-sheet-width 3))

(defn- get-button-height []
  (/ @button-sprite-sheet-height 2))

(defn- left-margin []
  (/ (- (.-innerWidth js/window) (:puzzle-width-height @game-state)) 2))

(defn- top-margin []
  (/ (- (.-innerHeight js/window) (:puzzle-width-height @game-state)) 2))

(defn get-piece-width-height [puzzle-width-height]
  (/ puzzle-width-height row-col-num))

(defn make-buttons-same-size-as-puzzle-piece! [control-button]
  (let [piece-width-height (get-piece-width-height (:puzzle-width-height @game-state))]
    (.setTo
      (.-scale control-button)
      (/ piece-width-height (get-button-width))
      (/ piece-width-height (get-button-height)))))

(defn- currently-playing-game? []
  (let [dereffed-game-state @game-state]
    (and (not (empty? (:sprites-state dereffed-game-state)))
         (nil? (:stage-clear-text dereffed-game-state)))))

(defn- puzzle-solved? []
  (let [sprites-state (:sprites-state @game-state)
        row-flipped? (:row-flipped? sprites-state)
        col-flipped? (:col-flipped? sprites-state)
        diagonal-flipped? (:diagonal-flipped? sprites-state)]
    (or (and (every? #(false? (val %)) row-flipped?)
             (every? #(false? (val %)) col-flipped?)
             (false? diagonal-flipped?))
        (and (every? #(true? (val %)) row-flipped?)
             (every? #(true? (val %)) col-flipped?)
             (false? diagonal-flipped?)))))

(defn- show-play-button! []
  (.setTo (.-scale (:play-button @game-state)) 1 1))

(defn hide-play-button! []
  (.setTo (.-scale (:play-button @game-state)) 0 0))

(defn- show-congrat-message! []
  (swap!
    game-state
    assoc
    :stage-clear-text
    (.text (.-add @game)
           (/ (.-innerWidth js/window) 5)
           (/ (.-innerHeight js/window) 20)
           "Congrats!\n You cleared the puzzle!"
           (clj->js {:font  "60px Arial"
                     :fill  "#ffffff"
                     :align "center"}))))

(defn- show-see-ranking-button! []
  (.setTo (.-scale (:see-ranking-button @game-state)) 0.5 0.5))

(defn hide-see-ranking-button! []
  (.setTo (.-scale (:see-ranking-button @game-state)) 0 0))

(defn make-see-ranking-button! []
  (swap!
    game-state
    assoc
    :see-ranking-button
    (this-as this
      (.button
        (.-add @game)
        (* 0.75 (.-innerWidth js/window))
        (* 0.2 (.-innerHeight js/window))
        "see-ranking-button"
        #(rf/dispatch [:screen-change :ranking-dashboard])
        this)))
  (show-see-ranking-button!))

(defn show-reset-button! []
  (.setTo (.-scale (:reset-button @game-state)) 0.1 0.1))

(defn hide-reset-button! []
  (.setTo (.-scale (:reset-button @game-state)) 0 0))

(defn- hide-control-buttons! []
  (doseq [control-button (:control-buttons @game-state)]
    (.setTo (.-scale control-button) 0 0)))

(defn- show-control-buttons! []
  (doseq [control-button (:control-buttons @game-state)]
    (make-buttons-same-size-as-puzzle-piece! control-button)))

(defn finish-game-when-puzzle-is-complete! [send-puzzle-complete-fn!]
  (when (and (currently-playing-game?)
             (puzzle-solved?)
             (not (:stage-clear-text @game-state)))
    (hide-reset-button!)
    (hide-control-buttons!)
    (show-play-button!)
    (show-see-ranking-button!)
    (show-congrat-message!)
    (send-puzzle-complete-fn! (:play-time @game-state))
    (swap! game-state assoc :sprites-state {})))

(def initial-sprites-state-per-piece
  (reduce
    #(assoc %1 %2 false)
    {}
    (for [row (range row-col-num)
          col (range row-col-num)]
      [row col])))

(defn- synchronize-puzzle-board [sprites-state]
  (when (currently-playing-game?)
    (swap! game-state assoc :sprites-state sprites-state)
    (let [game-object-factory (.-add @game)
          derefed-state @game-state
          row-flips-applied (reduce
                              (fn [sprites-state-in-modification [row flipped?]]
                                (reduce
                                  (fn [sprites-state col]
                                    (update sprites-state [row col] (if flipped? not identity)))
                                  sprites-state-in-modification
                                  (range row-col-num)))
                              initial-sprites-state-per-piece
                              (:row-flipped? sprites-state))
          col-flips-applied (reduce
                              (fn [sprites-state-in-modification [col flipped?]]
                                (reduce
                                  (fn [sprites-state row]
                                    (update sprites-state [row col] (if flipped? not identity)))
                                  sprites-state-in-modification
                                  (range row-col-num)))
                              row-flips-applied
                              (:col-flipped? sprites-state))
          diagonal-flip-applied (reduce
                                  (fn [sprites-state-in-modification row-col]
                                    (update sprites-state-in-modification
                                            [(- row-col-num 1 row-col) row-col]
                                            (if (:diagonal-flipped? sprites-state) not identity)))
                                  col-flips-applied
                                  (range row-col-num))
          sprites (:sprites derefed-state)]
      (doseq [[[row col] sprite-flipped-state] diagonal-flip-applied]
        (let [piece-scale (.-scale (sprites [row col]))]
          (if (= false sprite-flipped-state)
            (.to
              (.tween game-object-factory piece-scale)
              (clj->js {:x (:piece-x-scale derefed-state)
                        :y (:piece-y-scale derefed-state)})
              500
              js/Phaser.Easing.Linear.None
              true)
            (.to
              (.tween game-object-factory piece-scale)
              (clj->js {:x 0 :y 0})
              500
              js/Phaser.Easing.Linear.None
              true)))))))

(defn hide-all-puzzle-pieces! []
  (synchronize-puzzle-board
    {:row-flipped?      (reduce
                          #(assoc %1 %2 true)
                          {}
                          (range row-col-num))
     :col-flipped?      (reduce
                          #(assoc %1 %2 false)
                          {}
                          (range row-col-num))
     :diagonal-flipped? false})
  (swap! game-state assoc :sprites-state nil))

(defn hide-play-time! []
  (when-let [play-time-text (:play-time-text @game-state)]
    (.destroy play-time-text))
  (swap! game-state assoc :play-time-text nil))

(defn reset-game! []
  (hide-all-puzzle-pieces!)
  (hide-control-buttons!)
  (hide-play-time!)
  (show-play-button!)
  (show-see-ranking-button!))

(defn make-reset-button! [send-reset-fn]
  (swap!
    game-state
    assoc
    :reset-button
    (this-as this
      (.button
        (.-add @game)
        (* 0.85 (.-innerWidth js/window))
        (* 0.3 (.-innerHeight js/window))
        "reset-button"
        (fn []
          (reset-game!)
          (send-reset-fn))
        this)))
  (hide-reset-button!))

(defn make-audio-button! []
  (swap!
    game-state
    assoc
    :audio-button
    (this-as this
      (.button
        (.-add @game)
        (* 0.85 (.-innerWidth js/window))
        (* 0.5 (.-innerHeight js/window))
        "audio-button"
        (fn []
          (swap! game-state
                 update
                 :audio-on?
                 not))
        this))))

(defn destroy-stage-clear-text! []
  (when-let [stage-clear-text (:stage-clear-text @game-state)]
    (.destroy stage-clear-text))
  (swap! game-state assoc :stage-clear-text nil))

(defn show-play-time! []
  (when-not (:play-time-text @game-state)
    (swap! game-state
           assoc
           :play-time-text
           (.text (.-add @game)
                  (* (.-innerWidth js/window) 0.8)
                  (/ (.-innerHeight js/window) 20)
                  "0.000"
                  (clj->js {:font  "60px Arial"
                            :fill  "#ffffff"
                            :align "center"})))))

(defn update-play-time-to-current-time [play-time]
  (let [derefed-state @game-state
        play-time-in-sec (/ play-time 1000)]
    (.setText
      (:play-time-text derefed-state)
      (str play-time-in-sec))
    (swap! game-state assoc :play-time play-time-in-sec)))
