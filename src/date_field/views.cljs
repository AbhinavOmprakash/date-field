(ns date-field.views
  (:require
    [reagent.core :as r]))


(defn submit-button
  [{:keys [enabled? on-click]
    :or {enabled? true
         on-click identity}}]
  [:button {:class ["button" "my-3"  "is-dark"]
            :disabled (not enabled?)
            :on-click on-click}
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
  [{:keys [on-error on-error-resolved on-input value]
    :or {on-error identity
         on-error-resolved identity
         on-input identity}}]
  (fn [{:keys [value]}]
    (let [valid-input? (valid-date-format? value)]
      (if valid-input? (on-error-resolved) (on-error))
      [:input {:class ["input" (if valid-input? nil "is-danger")]
               :type "text"
               :value value
               :placeholder "DD-MM-YYYY"
               :on-input (fn [x] (on-input (-> x .-target .-value)))}])))


(defn main-panel
  []
  (let [errors? (r/atom false)
        panel-state (r/atom {:date-field ""})]
    (fn []
      [:div {:class ["container" "my-6"]}
       [date-field {:on-error (fn [] (reset! errors? true))
                    :on-error-resolved (fn [] (reset! errors? false))
                    :value (:date-field @panel-state)
                    :on-input (fn [x] (swap! panel-state assoc :date-field x))}]
       [submit-button {:enabled? (not @errors?)
                       :on-click #(reset! panel-state {:date-field ""})}]])))
