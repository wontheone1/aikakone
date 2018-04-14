(ns hello-world.sound-effect
  (:require [cljs-bach.synthesis
             :refer [add audio-context connect connect-> current-time destination
                     percussive gain sine square run-with]]
            [hello-world.util :as util]
            [leipzig.melody :as melody]
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

(def C5 (* 2 (frequencies-in-major-scale-4th-octave 0)))

(def D5 (* 2 (frequencies-in-major-scale-4th-octave 1)))

(def E5 (* 2 (frequencies-in-major-scale-4th-octave 2)))

(def F5 (* 2 (frequencies-in-major-scale-4th-octave 3)))

(def G5 (* 2 (frequencies-in-major-scale-4th-octave 4)))

(defonce context (audio-context))

(defn play-beep! [frequency]
  (when (:audio-on? @util/game-state)
    (run-with
      (connect->
        (square frequency)
        (percussive 0.01 0.6)
        (gain 0.1)
        destination)
      context
      (current-time context)
      1.0)))

(def melody
  (melody/phrase [1 1 0.67 0.33 1 0.67 0.33 0.67 0.33 1]
                 [C5 C5 C5 D5 E5 E5 D5 E5 F5 G5]))

(defn bell
  "An imitation bell, made by adding together harmonics."
  [{:keys [pitch]}]
  (let [harmonic (fn [multiple decay]
                   (connect->
                     (sine (* multiple pitch))              ; Each harmonic is a sine wave.
                     (percussive 0.01 decay)                ; The attack and decay of each note.
                     (gain 0.05)))]                         ; set the volume to 0.2.
    (->> (map harmonic
              [1.0 2.0 3.0 4.1 5.2]                         ; Each harmonic is a multiple of the base frequency.
              [1.0 0.6 0.4 0.3 0.2])                        ; Higher harmonics last shorter.
         (apply add))))

(defn play-from!
  "Take a sequence of notes and play them from a set point in an audiocontext."
  [audiocontext from notes]
  (doseq [{:keys [time duration instrument] :as note} notes]
    (let [at (+ time from)
          synth-instance (-> note
                             (dissoc :time)
                             instrument)
          connected-instance (connect synth-instance destination)]
      (connected-instance audiocontext at duration))))

(defn play!
  "Take a sequence of notes and play them in an audiocontext."
  [audiocontext notes]
  (play-from! audiocontext (current-time audiocontext) notes))

(defn play-row-row-row-your-boat []
  (when (:audio-on? @util/game-state)
    (->> melody
         (melody/wherever (comp not :instrument) :instrument (melody/is bell))
         (play! context)))
  (js/setTimeout play-row-row-row-your-boat 8000))

(play-row-row-row-your-boat)
