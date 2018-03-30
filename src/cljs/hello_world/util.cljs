(ns hello-world.util
  (:require [reagent.core :as r]))

(enable-console-print!)

(def row-col-num 5)

(defn parse-json [json-string]
  (js->clj (.parse js/JSON json-string)))

(defonce ranking (r/atom []))

(defonce showing-game? (r/atom true))

(def game (atom nil))

(defonce game-state (atom {:sprites             {}
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

(def flipped-state "FLIPPED")

(def non-flipped-state "NON-FLIPPED")

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
  (/ (- (.-innerHeight js/window) (:puzzle-width-height @game-state)) 4))

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
    (and (not (empty? (:sprites dereffed-game-state)))
         (nil? (:stage-clear-text dereffed-game-state)))))

(defn- puzzle-solved? []
  (every? #(= non-flipped-state (val %)) (:sprites-state @game-state)))

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

(defn show-game! []
  (reset! showing-game? true)
  (let [canvas (.getElementById js/document "canvas")]
    (set! (.-display (.-style canvas)) "block")))

(defn- hide-game! []
  (reset! showing-game? false)
  (let [canvas (.getElementById js/document "canvas")]
    (set! (.-display (.-style canvas)) "none")))

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
        (fn []
          (hide-game!))
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

(defn- synchronize-puzzle-board [sprites-state]
  (when (currently-playing-game?)
    (swap! game-state assoc :sprites-state sprites-state)
    (let [derefed-state @game-state
          piece-x-scale (:piece-x-scale derefed-state)
          piece-y-scale (:piece-y-scale derefed-state)
          sprites (:sprites derefed-state)]
      (doseq [[[col row] sprite-flipped-state] sprites-state]
        (let [piece-scale (.-scale (sprites [col row]))]
          (if (= non-flipped-state sprite-flipped-state)
            (.setTo piece-scale piece-x-scale piece-y-scale)
            (.setTo piece-scale 0 0)))))))

(defn hide-all-puzzle-pieces! []
  (synchronize-puzzle-board
    (for [row (range row-col-num)
          col (range row-col-num)]
      [[col row] flipped-state]))
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
