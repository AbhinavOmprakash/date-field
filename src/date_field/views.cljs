(ns date-field.views
  (:require
    [date-field.events :as events]
    [date-field.subs :as subs]
    [re-frame.core :as rf]))


(defn submit-button
  [{:keys [disabled? on-click]}]
  (fn [{:keys [disabled?]}]
    [:button {:class ["button" "my-3"  "is-dark"]
              :disabled disabled?
              :on-click on-click}
     "submit"]))


(defn date-field
  [{:keys [on-input value date-validation message]
    :or {on-input identity}}]
  (fn [{:keys [value date-validation message]}]
    [:div [:input {:class ["input" (when (= date-validation :invalid)
                                     "is-danger")]
                   :type "text"
                   :value value
                   :placeholder "DD-MM-YYYY"
                   :on-input (fn [x] (on-input (-> x .-target .-value)))}]
     (when (= date-validation :invalid)
       [:p {:class "help is-danger"} message])]))


(defn date-range
  [{:keys [start-date end-date on-input-start-date on-input-end-date]}]
  [:div {:class ["my-6" "is-flex is-align-items-center "]}
   [:p {:class "pr-3"} "from"]
   [:span {:class "pr-3"}
    [date-field (assoc start-date :on-input on-input-start-date)]]
   [:p {:class "pr-3"} "to"]
   [:span {:class "pr-3"}
    [date-field (assoc end-date :on-input on-input-end-date)]]])


;; now the main-panel doesn't reference any atom!
(defn main-panel
  []
  (let [form-data @(rf/subscribe [::subs/form-data])]
    [:div {:class ["container" "my-6"]}
     [:h1 {:class "title"} "Written in re-frame (with stateless components)"]
     [date-field (assoc (:date-field form-data)
                        :on-input #(rf/dispatch [::events/update-date-field %]))]
     [date-range (assoc (:date-range form-data)
                        :on-input-start-date #(rf/dispatch [::events/update-start-date %])
                        :on-input-end-date #(rf/dispatch [::events/update-end-date %]))]
     [submit-button {:disabled? (not= :valid (:form-validation form-data))
                     :on-click #(rf/dispatch [::events/submit-form])}]]))
