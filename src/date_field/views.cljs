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
      [:div [:input {:class ["input" (if valid-input? nil "is-danger")]
                     :type "text"
                     :value value
                     :placeholder "DD-MM-YYYY"
                     :on-input (fn [x] (on-input (-> x .-target .-value)))}]
       (when (not valid-input?)
         [:p {:class "help is-danger"} "incorrect input date format, use DD-MM-YYYY"])])))


(defn date-range
  [{:keys [start
           end
           on-input
           on-error
           on-error-resolved]}]
  [:div {:class ["my-6" "is-flex is-align-items-center "]}
   [:p {:class "pr-3"} "from"]
   [:span {:class "pr-3"}
    [date-field {:value start
                 :on-input (fn [x] (on-input #(assoc % :start x)))
                 :on-error (fn [] (on-error #(assoc % :start true)))
                 :on-error-resolved (fn [] (on-error #(assoc % :start false)))}]]
   [:p {:class "pr-3"} "to"]
   [:span {:class "pr-3"}
    [date-field {:value end
                 :on-input (fn [x] (on-input #(assoc % :end x)))
                 :on-error (fn [] (on-error #(assoc % :end true)))
                 :on-error-resolved (fn [] (on-error #(assoc % :end false)))}]]])


(defn contains-errors?
  [m]
  (not (every? false?
               (clojure.walk/postwalk (fn [x]
                                        (when (boolean? x)
                                          x))
                                      m))))


(defn main-panel
  []
  (let [errors (r/atom {:date-field false
                        :date-range {:start false
                                     :end false}})
        panel-state (r/atom {:date-field ""
                             :date-range {:start ""
                                          :end ""}})]
    (fn []
      [:div {:class ["container" "my-6"]}
       [date-field {:on-error (fn [] (swap! errors? assoc :date-field true))
                    :on-error-resolved (fn [] (swap! errors? assoc :date-field false))
                    :value (:date-field @panel-state)
                    :on-input (fn [x] (swap! panel-state assoc :date-field x))}]
       [date-range {:start (get-in @panel-state [:date-range :start])
                    :end (get-in @panel-state [:date-range :end])
                    :on-input (fn [f] (swap! panel-state update :date-range f))
                    :on-error (fn [f] (swap! errors? update :date-range f))
                    :on-error-resolved (fn [f] (swap! errors? update :date-range f))}]
       [submit-button {:enabled? (not (contains-errors? @errors))
                       :on-click #(reset! panel-state {:date-field ""})}]])))
