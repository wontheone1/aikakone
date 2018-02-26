(ns hello-world.core
  (:require [compojure.core :refer :all]
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

(defn- handle-message! [{:keys [id client-id ?data]}]
  (println :id id)
  (println :cl-id client-id)
  (println :data? ?data)

  (when (= id :aikakone/sprites-state)
    (reset! sprites-state ?data)
    (doseq [uid (:any @connected-uids)]
      (println :uid uid)
      (when (not= client-id uid)
        (chsk-send! uid [:aikakone/sprites-state ?data])))))

(sente/start-chsk-router! ch-chsk handle-message!)

(defroutes app
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
