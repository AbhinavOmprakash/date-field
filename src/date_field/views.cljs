(ns date-field.views
  (:require
    [reagent.core :as r]))


(defn submit-button
  []
  [:button {:class ["button" "my-3"  "is-dark"]}
   "submit"])


(defn date-field
  []
  (let [date-value (r/atom "")]
    (fn []
      (prn @date-value)
      [:input {:class ["input"]
               :type "text"
               :placeholder "DD-MM-YYYY"
               :on-input (fn [x]
                           (reset! date-value (-> x .-target .-value)))}])))


(defn main-panel
  []
  [:div {:class ["container" "my-6"]}
   [date-field]
   [submit-button]])
