(ns hello-world.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<!]]
            [cljs-http.client :as http]
            [hello-world.components :as view]
            [hello-world.web-socket :as web-sck]
            [nightlight.repl-server]
            [hello-world.util :as util]
            [reagent.core :as r]
            [re-frame.core :as rf]
            ))

(enable-console-print!)

(defn add-game-image-url! [search-word]
  (go (let [response (<! (http/get "https://api.finna.fi/v1/search"
                                   {:with-credentials? false
                                    :query-params      {"lookfor" search-word}}))]
        (rf/dispatch [:add-game-img-url
                      search-word
                      (str "https://api.finna.fi"
                           (-> (filter :images (get-in response [:body :records]))
                               second
                               :images
                               first))]))))

;- Event Handlers -

(rf/reg-event-db
  :initialize
  (fn [_ _]
    (doseq [{:keys [search-word]} util/puzzle-images]
      (add-game-image-url! search-word))
    {:screen  :intro
     :ranking []}))

(rf/reg-event-db
  :ranking
  (fn [db [_ ranking]]
    (assoc db :ranking ranking)))

(rf/reg-event-db
  :screen-change
  (fn [db [_ screen]]
    (assoc db :screen screen)))

(rf/reg-event-db
  :set-game-img
  (fn [db [_ search-word]]
    (assoc db :game-img search-word)))

(rf/reg-event-db
  :add-game-img-url
  (fn [db [_ search-word image-url]]
    (update db :search-word->game-img-url assoc search-word image-url)))

;- Query  -

(rf/reg-sub
  :screen
  (fn [db _]
    (:screen db)))

(rf/reg-sub
  :ranking
  (fn [db _]
    (:ranking db)))

(rf/reg-sub
  :game-img
  (fn [db _]
    (:game-img db)))

(rf/reg-sub
  :search-word->game-img-url
  (fn [db _]
    (:search-word->game-img-url db)))

; - Entry Point -

(rf/dispatch-sync [:initialize])
(r/render [view/app]
          (.getElementById js/document "app"))

; this is the game program's entry point
(let [buttons-img (js/Image.)]
  ; finding out size of image. https://stackoverflow.com/a/626505/5802173
  ; image loading is done asynchronously. The way to start the game after image is loaded is
  ; we start the game in `onload` callback of the image. After loading buttons-img first,
  ; start loading puzzle image then start the game.
  (set!
    (.-onload buttons-img)
    (clj->js
      (fn []
        (reset! util/button-sprite-sheet-width (.-width buttons-img))
        (reset! util/button-sprite-sheet-height (.-height buttons-img))
        (web-sck/start-web-socket!)))) ; start game after loading image
  (set! (.-src buttons-img) "images/control-buttons.png"))
