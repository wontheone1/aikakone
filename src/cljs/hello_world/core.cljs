(ns hello-world.core
  (:require [goog.events :as events]
            [hello-world.web-socket :as web-sck]
            [nightlight.repl-server]
            ))

(enable-console-print!)

(declare game)

(defn- preload []
  (.image (.-load game) "puzzle" "images/puzzle-image.jpg"))

(defn- create []
  (.sprite (.-add game) 0 0 "puzzle"))

(defn- update [])

(defonce game (js/Phaser.Game.
                (.-innerWidth js/window)
                (.-innerHeight js/window)
                js/Phaser.Auto
                "" ; id of the DOM element to insert canvas. As we've left it blank it will simply be appended to body.
                (clj->js {:preload preload :create create :update update})))

(defonce state (atom {}))

(web-sck/start-router state)
