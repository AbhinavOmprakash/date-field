(ns date-field.views
  (:require
    [date-field.events :as events]
    [date-field.subs :as subs]
    [re-frame.core :as rf]))


(defn date-field
  [id]
  (rf/dispatch [::events/initialize-date-field id])
  (fn [id {:keys [on-input] :or {on-input identity}}]
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
    (let [state @(rf/subscribe [::subs/date-range id])]
      (prn "state" state)
      [:div {:class ["my-6" "is-flex is-align-items-center "]}
       [:p {:class "pr-3"} "from"]
       [:span {:class "pr-3"}
        [date-field :start {:on-input #(rf/dispatch [::events/input-start-date-field id %])}]]
       [:p {:class "pr-3"} "to"]
       [:span {:class "pr-3"}
        [date-field :end {:on-input #(rf/dispatch [::events/input-end-date-field id %])}]]])))


(defn submit-button
  [id]
  (fn [_]
    [:button {:class ["button" "my-3"  "is-dark"]
              :disabled @(rf/subscribe [::subs/submit-button-disabled? id])}
     "submit"]))


(defn main-panel
  []
  (fn []
    (let [invalid? @(rf/subscribe [::subs/main-panel-invalid? {:date-field [1]
                                                               :date-range [1]}])]
      (if invalid?
        (rf/dispatch [::events/disable-submit-button 1])
        (rf/dispatch [::events/enable-submit-button 1]))

      [:div {:class ["container" "my-6"]}
       [date-field 1]
       [date-range 1]
       [submit-button 1]])))
