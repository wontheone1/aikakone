(ns hello-world.core
  (:require [cheshire.core :as json]
            [clj-time.core :as t]
            [clj-time.local :as l]
            [compojure.core :refer :all]
            [org.httpkit.server :as server]
            [ring.middleware.defaults :as defaults]
            [ring.middleware.cors :as cors]
            [taoensso.sente :as sente]
            [taoensso.sente.server-adapters.http-kit :refer (get-sch-adapter)]
            ))

(let [{:keys [ch-recv send-fn connected-uids
              ajax-post-fn ajax-get-or-ws-handshake-fn]}
      (sente/make-channel-socket!
        (get-sch-adapter)
        {:user-id-fn (fn [req] (get-in req [:params :client-id]))})]
  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk                       ch-recv)
  (def chsk-send!                    send-fn)
  (def connected-uids                connected-uids))

(def sprites-state (atom nil))

(def ranking (atom []))

(def game-start-time (atom nil))

(def sending-time-future (atom nil))

(defn- start-sending-current-playtime! []
  (future (loop []
            (Thread/sleep 200)
            (when-let [uids (seq (:any @connected-uids))]
              (when-let [start-time @game-start-time]
                (doseq [uid uids]
                  (chsk-send! uid [:aikakone/current-time
                                   (t/in-millis (t/interval start-time (l/local-now)))]))
                (recur))))))

(defn- send-data-to-all-except-message-sender [client-id message-type data]
  (doseq [uid (:any @connected-uids)]
    (when (not= client-id uid)
      (chsk-send! uid [message-type data]))))

(defn- handle-message! [{:keys [id client-id ?data]}]
  (case id
    :aikakone/sprites-state
    (do
      (reset! sprites-state ?data)
      (send-data-to-all-except-message-sender client-id :aikakone/sprites-state ?data))

    :aikakone/game-start
    (chsk-send! client-id [:aikakone/game-start @sprites-state])

    :aikakone/start-timer
    (do
      (reset! game-start-time (l/local-now))
      (reset! sending-time-future (start-sending-current-playtime!)))

    :aikakone/puzzle-complete!
    (do
      (reset! game-start-time nil)
      (reset! sprites-state nil)
      (swap! ranking (fn [ranking]
                       (sort (conj ranking ?data))))
      (println @ranking)
      (send-data-to-all-except-message-sender client-id :aikakone/sprites-state {}))

    :aikakone/reset
    (println "reset message received.")

    nil))

(sente/start-chsk-router! ch-chsk handle-message!)

(defroutes app
           (GET  "/rankings" req (json/generate-string @ranking))
           (GET  "/chsk" req (ring-ajax-get-or-ws-handshake req))
           (POST "/chsk" req (ring-ajax-post                req)))

(def handler
  (-> #'app
      (defaults/wrap-defaults (assoc-in defaults/site-defaults [:security :anti-forgery] false))
      (cors/wrap-cors :access-control-allow-origin [#".*"]
                      :access-control-allow-methods [:get :put :post :delete]
                      :access-control-allow-credentials ["true"])))

(defn -main []
  (server/run-server handler {:port 2222}))
