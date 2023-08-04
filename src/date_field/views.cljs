(ns date-field.views)

(defn main-panel
  []
  [:div {:class ["container" "my-6"]}
   [:input {:class ["input"]
            :type "text"
            :placeholder "DD-MM-YYYY"}]])
