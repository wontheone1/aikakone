(ns hello-world.util)

(enable-console-print!)

(def game (atom nil))

(defonce game-state (atom {:sprites             {}
                           :sprites-state       {}
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

(defn show-congrat-message-when-puzzle-is-complete! []
  (when (and (every? #(= non-flipped-state (val %)) (:sprites-state @game-state))
             (not (:stage-clear-text @game-state)))
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
