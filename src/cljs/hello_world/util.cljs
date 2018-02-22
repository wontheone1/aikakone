(ns hello-world.util)

(def flipped-state "FLIPPED")
(def non-flipped-state "NON-FLIPPED")

(defn show-puzzle-is-cleared-if-puzzle-is-complete [game game-state]
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
