(ns date-field.views
  (:require
    [reagent.core :as r]))


(defn submit-button
  []
  [:button {:class ["button" "my-3"  "is-dark"]}
   "submit"])


(defn valid-date-format?
  [date]
  (or (empty? date)
      ;; FYI this is a bad way to validate dates.
      ;; you should rely on your underlying date-time library
      ;; for this validation but for the blogpost this is
      ;; good enough
      (boolean (re-matches #"[\d]{2}\-[\d]{2}\-[\d]{4}" date))))


(defn date-field
  []
  (let [date-value (r/atom "")
        valid? (r/atom true)]
    ;; new
    (add-watch date-value
               :check-validity
               (fn [k reference old-value new-value]
                 (reset! valid? (valid-date-format? new-value))))
    (fn []
      [:input {:class ["input" (if @valid? nil "is-danger")]
               :type "text"
               :placeholder "DD-MM-YYYY"
               :on-input (fn [x]
                           (reset! date-value (-> x .-target .-value)))}])))


(defn main-panel
  []
  [:div {:class ["container" "my-6"]}
   [date-field]
   [submit-button]])
