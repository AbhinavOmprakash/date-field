(ns date-field.views
  (:require
    [date-field.events :as events]
    [date-field.subs :as subs]
    [re-frame.core :as rf]))


(defn date-field
  [id]
  (rf/dispatch [::events/initialize-date-field id])
  (fn [id {:keys [on-input] :or {on-input identity}}]
    (prn  ::date-field)
    (let [state @(rf/subscribe [::subs/date-field id])
          invalid? (:invalid? state)]
      [:div [:input {:class ["input" (when invalid? "is-danger")]
                     :type "text"
                     :placeholder "YYYY-MM-DD"
                     :value (:value state)
                     :on-input (fn [x]
                                 (rf/dispatch [::events/input-date-field id (-> x .-target .-value)])
                                 (on-input (-> x .-target .-value)))}]
       (when (:show-message? state)
         [:p {:class ["help" (when invalid? "is-danger")]}
          (:message state)])])))


(defn date-range
  [id]
  (rf/dispatch [::events/initialize-date-range id])
  (fn [_]
    (prn  ::date-range)
    (let [state @(rf/subscribe [::subs/date-range id])]
      [:div {:class ["my-6" "is-flex is-align-items-center "]}
       [:p {:class "pr-3"} "from"]
       [:span {:class "pr-3"}
        [date-field :start {:on-input #(rf/dispatch [::events/input-start-date-field id %])}]]
       [:p {:class "pr-3"} "to"]
       [:span {:class "pr-3"}
        [date-field :end {:on-input #(rf/dispatch [::events/input-end-date-field id %])}]]])))


(defn submit-button
  [id]

  (prn ::submit-button)
  (fn [_ {:keys [on-click]}]
    [:button {:class ["button" "my-3"  "is-dark"]
              :disabled @(rf/subscribe [::subs/submit-button-disabled? id])
              :on-click on-click}
     "submit"]))


(defn main-panel
  []
  (fn []
    (prn ::main-panel)
    (let [components {:date-field [1]
                      :date-range [1]}
          form-data (merge @(rf/subscribe [::subs/date-range-data 1])
                           @(rf/subscribe [::subs/date-field-data 1]))
          invalid? @(rf/subscribe [::subs/main-panel-invalid? components])
          submit-form-data #(rf/dispatch [::events/submit-form-data form-data])
          reset-components #(do
                              (rf/dispatch [::events/reset-date-field 1])
                              (rf/dispatch [::events/reset-date-range 1]))]
      (if invalid?
        (rf/dispatch [::events/disable-submit-button 1])
        (rf/dispatch [::events/enable-submit-button 1]))

      [:div {:class ["container" "my-6"]}
       [date-field 1]
       [date-range 1]
       [submit-button 1 {:on-click #(do (submit-form-data) (reset-components))}]])))
