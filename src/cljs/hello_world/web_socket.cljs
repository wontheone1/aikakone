(ns hello-world.web-socket
  (:require [taoensso.sente  :as sente :refer (cb-success?)]
            [hello-world.util :as util]
            ))

(defn get-chsk-url
  "Connect to a configured server instead of the page host"
  [protocol chsk-host chsk-path type]
  (let [protocol (case type :ajax protocol
                            :ws   (if (= protocol "https:") "wss:" "ws:"))]
    (str protocol "//" "localhost:2222" chsk-path)))

(with-redefs
  [sente/get-chsk-url get-chsk-url]
  (let [{:keys [ch-recv send-fn]}
        (sente/make-channel-socket! "/chsk"
                                    {:type :auto})]
    (def ch-chsk ch-recv)
    (def chsk-send! send-fn)))

(defn send-sprites-state! [state]
  (println "sending " (:sprites-state @state))
  (chsk-send! [:aikakone/sprites-state (:sprites-state @state)]))

(defn- syncronize-puzzle-board [state sprites-state]
  (let [derefed-state @state
        piece-x-scale (:piece-x-scale derefed-state)
        piece-y-scale (:piece-y-scale derefed-state)
        sprites (:sprites derefed-state)]
    (doseq [[[col row] sprite-flipped-state] sprites-state]
      (let [piece-scale (.-scale (sprites [col row]))]
        (if (= util/non-flipped-state sprite-flipped-state)
          (do
            (swap!
              state
              update
              :sprites-state
              assoc
              [col row]
              util/non-flipped-state)
            (.setTo piece-scale piece-x-scale piece-y-scale))
          (do
            (swap!
              state
              update
              :sprites-state
              assoc
              [col row]
              util/flipped-state)
            (.setTo piece-scale 0 0)))))))

(defn- define-event-msg-handler [state]
  (defmulti event-msg-handler :id)

  (defmethod event-msg-handler :default [{:keys [event]}]
    (println "Unhandled event: " event))

  (defmethod event-msg-handler :chsk/state [{:keys [?data]}]
    (if (= ?data {:first-open? true})
      (println "Channel socket successfully established!")
      (println "Channel socket state change:" ?data)))

  (defmethod event-msg-handler :chsk/recv [{:keys [?data]}]
    (let [[event-id event-data] ?data]
      (println "received " [event-id event-data])
      (case event-id
        :aikakone/sprites-state (syncronize-puzzle-board state event-data)
        (println event-id " is unknown event type"))))

  (defn send-uid []
    (chsk-send! [:aikakone/uid (:uid @state)]))

  (defmethod event-msg-handler :chsk/handshake [{:keys [?data]}]
    (let [[?uid ?csrf-token ?handshake-data] ?data]
      (println "Handshake:" ?data)
      (swap! state assoc :uid ?uid)
      (send-uid))))

(defn start-router [state]
  (sente/start-chsk-router! ch-chsk (define-event-msg-handler state)))
