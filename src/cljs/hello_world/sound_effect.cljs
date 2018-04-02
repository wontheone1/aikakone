(ns hello-world.sound-effect
  (:require [cljs-bach.synthesis
             :refer [audio-context connect-> current-time destination
                     percussive gain square run-with]]
            ))

(def frequencies-in-major-scale-4th-octave
  [261.63                                                   ;C4
   293.66                                                   ;D4
   329.63                                                   ;E4
   349.23                                                   ;F4
   392.00                                                   ;G4
   440                                                      ;A4
   493.88                                                   ;B4
   523.25                                                   ;C5
   ])

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
