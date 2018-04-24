(ns hello-world.components
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljsjs.material-ui]
            [cljs-react-material-ui.core :refer [get-mui-theme color]]
            [cljs-react-material-ui.reagent :as ui]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [hello-world.util :as util]
            [re-frame.core :as rf]
            ))

;- View Functions -

(defn go-back-to-game-button []
  [ui/mui-theme-provider
   {:muiTheme (get-mui-theme {:palette {:textColor (color :blue200)}})}
   [ui/raised-button {:label    "Play game"
                      :on-click #(do
                                   (util/show-game!))}]])

(defn ranking-dashboard []
  (when (= :ranking-dashboard @(rf/subscribe [:screen]))
    (go (let [response (<! (http/get "http://localhost:2222/rankings"))
              ranking (:body response)]
          (rf/dispatch [:ranking (util/parse-json ranking)])))
    (let [ranking @(rf/subscribe [:ranking])]
      [:div
       [go-back-to-game-button]
       [ui/mui-theme-provider
        {:muiTheme (get-mui-theme {:palette {:textColor (color :blue200)}})}
        [ui/table
         [ui/table-header {:displaySelectAll false :adjustForCheckbox false}
          [ui/table-row
           [ui/table-header-column "Ranking"]
           [ui/table-header-column "Time Record"]]]
         (apply conj
                [ui/table-body {:displayRowCheckbox false}]
                (for [rank (range (count ranking))]
                  [ui/table-row
                   [ui/table-row-column (inc rank)]
                   [ui/table-row-column (ranking rank)]]))]]])))
