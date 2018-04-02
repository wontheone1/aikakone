(ns hello-world.sound-effect
  (:require [cljs-bach.synthesis
             :refer [audio-context connect-> current-time destination
                     percussive gain square run-with]]
            ))

(defonce context (audio-context))

(defn play-beep! [frequency]
  (run-with
    (connect->
      (square frequency)
      (percussive 0.01 0.6)
      (gain 0.1)
      destination)
    context
    (current-time context)
    1.0))
