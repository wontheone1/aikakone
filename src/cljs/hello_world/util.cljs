(ns hello-world.util)

(enable-console-print!)

(def game (atom nil))

(defonce game-state (atom {:sprites             {}
                           :sprites-state       {}
                           :play-button         nil
                           :puzzle-width-height 0
                           :piece-x-scale       0
                           :piece-y-scale       0
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

(defn show-congrat-message-and-play-button-when-puzzle-is-complete! []
  (when (and (currently-playing-game?)
             (every? #(= non-flipped-state (val %)) (:sprites-state @game-state))
             (not (:stage-clear-text @game-state)))
    (.setTo (.-scale (:play-button @game-state)) 1 1)
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
                       :align "center"})))))

(defn- synchronize-puzzle-board [sprites-state]
  (when (currently-playing-game?)
    (let [derefed-state @game-state
          piece-x-scale (:piece-x-scale derefed-state)
          piece-y-scale (:piece-y-scale derefed-state)
          sprites (:sprites derefed-state)]
      (doseq [[[col row] sprite-flipped-state] sprites-state]
        (let [piece-scale (.-scale (sprites [col row]))]
          (if (= non-flipped-state sprite-flipped-state)
            (do
              (swap!
                game-state
                assoc-in
                [:sprites-state [col row]]
                non-flipped-state)
              (.setTo piece-scale piece-x-scale piece-y-scale))
            (do
              (swap!
                game-state
                assoc-in
                [:sprites-state [col row]]
                flipped-state)
              (.setTo piece-scale 0 0))))))))

(defn destroy-stage-clear-text! []
  (when-let [stage-clear-text (:stage-clear-text @game-state)]
    (.destroy stage-clear-text))
  (swap! game-state assoc :stage-clear-text nil))
