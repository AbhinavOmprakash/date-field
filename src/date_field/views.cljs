(ns date-field.views)


(defn submit-button
  []
  [:button {:class ["button" "my-3"  "is-dark"]}
   "submit"])


(defn main-panel
  []
  [:div {:class ["container" "my-6"]}
   [:input {:class ["input"]
            :type "text"
            :placeholder "DD-MM-YYYY"}]
   [submit-button]])
