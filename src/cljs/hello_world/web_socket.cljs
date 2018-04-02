(ns hello-world.web-socket
  (:require [taoensso.sente :as sente :refer (cb-success?)]
            [hello-world.util :as util]
            [hello-world.game :as game]))

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

(defn send-sprites-state! []
  (chsk-send! [:aikakone/sprites-state (:sprites-state @util/game-state)]))

(defn send-puzzle-complete! []
  (chsk-send! [:aikakone/puzzle-complete! nil]))

(defn send-start-timer! []
  (chsk-send! [:aikakone/start-timer nil]))

(defmulti event-msg-handler :id)

(defmethod event-msg-handler :default [{:keys [event]}]
  (println "Unhandled event: " event))

(defmethod event-msg-handler :chsk/state [{:keys [?data]}]
  (if (= ?data {:first-open? true})
    (println "Channel socket successfully established!")
    (println "Channel socket state change:" ?data)))

(defmethod event-msg-handler :chsk/recv [{:keys [?data]}]
  (let [[event-id event-data] ?data]
    (case event-id
      :aikakone/sprites-state (do
                                (util/synchronize-puzzle-board event-data)
                                (util/finish-game-when-puzzle-is-complete!
                                  send-puzzle-complete!))

      :aikakone/game-start (do
                             (swap! util/game-state assoc :sprites-state event-data)
                             (game/start-game! {:send-sprites-state-fn!   send-sprites-state!
                                                :send-puzzle-complete-fn! send-puzzle-complete!
                                                :send-start-timer-fn!     send-start-timer!}))

      :aikakone/current-time (when (and (:play-time-text @util/game-state)
                                        (util/currently-playing-game?))
                               (util/update-play-time-to-current-time event-data))

      (println event-id " is unknown event type"))))

(defn send-uid []
  (chsk-send! [:aikakone/uid (:uid @util/game-state)]))

(defmethod event-msg-handler :chsk/handshake [{:keys [?data]}]
  (let [[?uid ?csrf-token ?handshake-data] ?data]
    (println "Handshake established")
    (swap! util/game-state assoc :uid ?uid)
    (chsk-send! [:aikakone/game-start])
    (send-uid)))

(defn start-web-socket! []
  (sente/start-chsk-router! ch-chsk event-msg-handler))
