(ns hello-world.util)

(enable-console-print!)

(def game (atom nil))

(defonce game-state (atom {:sprites             {}
                           :sprites-state       {}
                           :play-button         nil
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

(defn- currently-playing-game? []
  (let [dereffed-game-state @game-state]
    (and (not (empty? (:sprites dereffed-game-state)))
         (nil? (:stage-clear-text dereffed-game-state)))))

(defn- puzzle-solved? []
  (every? #(= non-flipped-state (val %)) (:sprites-state @game-state)))

(defn- show-play-button! []
  (.setTo (.-scale (:play-button @game-state)) 1 1))

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

(defn finish-game-when-puzzle-is-complete! [send-puzzle-complete-fn!]
  (when (and (currently-playing-game?)
             (puzzle-solved?)
             (not (:stage-clear-text @game-state)))
    (show-play-button!)
    (show-see-ranking-button!)
    (show-congrat-message!)
    (send-puzzle-complete-fn! (:play-time @game-state))
    (swap! game-state assoc :sprites-state {})))

(defn- synchronize-puzzle-board [sprites-state]
  (swap! game-state assoc :sprites-state sprites-state)
  (when (currently-playing-game?)
    (let [derefed-state @game-state
          piece-x-scale (:piece-x-scale derefed-state)
          piece-y-scale (:piece-y-scale derefed-state)
          sprites (:sprites derefed-state)]
      (doseq [[[col row] sprite-flipped-state] sprites-state]
        (let [piece-scale (.-scale (sprites [col row]))]
          (if (= non-flipped-state sprite-flipped-state)
            (.setTo piece-scale piece-x-scale piece-y-scale)
            (.setTo piece-scale 0 0)))))))

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
