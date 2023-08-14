(ns date-field.views
  (:require
    [reagent.core :as r]))


(defn submit-button
  [{:keys [enabled? on-click]
    :or {enabled? true
         on-click identity}}]
  (prn "submit-button")
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
    (prn "date field" value)
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
  (prn "date range" start end)
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
  (let [child-nodes (fn this
                      [m]
                      (reduce (fn [acc el]
                                (if (map-entry? el)
                                  (let [value (val el)]
                                    (cond
                                      (boolean? value)
                                      (conj acc value)

                                      (map? value)
                                      (into acc (this value))))
                                  el))
                              []
                              m))]
    (not (every? false? (child-nodes m)))))


(def panel-state
  (atom {:date-field ""
         :date-range {:start ""
                      :end ""}
         :errors  {:date-field false
                   :date-range {:start false
                                :end false}}}))


(defonce subscriptions (atom {}))


(defn subscribe
  [key_ & ks]
  (let [atm (r/atom nil)]
    ;; check if a subscription is already registered because react rerenders componnents, and you don't want to register 
    ;; a new subscription every time
    (if (contains? @subscriptions key_)
      (get-in @subscriptions [key_ :state])
      (do (swap! subscriptions assoc key_ {:f #(get-in % ks)
                                           :state atm})
          atm))))


(defn watch-and-call-subscriptions
  [_key _ref old-value new-value]
  ;; (prn " watch-and-call-subscriptions")
  ;; (prn "subs" @subscriptions)
  (doseq [[_  {:keys [f state]}] @subscriptions]
    (when (not= (f old-value) (f new-value))
      (reset! state (f new-value)))))


(add-watch panel-state :watch-global-state watch-and-call-subscriptions)


(defn main-panel
  []
  (fn []
    [:div {:class ["container" "my-6"]}
     [date-field {:on-error (fn [] (swap! panel-state assoc-in [:errors :date-field] true))
                  :on-error-resolved (fn [] (swap! panel-state assoc-in [:errors :date-field] false))
                  :value @(subscribe :date-field :date-field)
                  :on-input (fn [x] (swap! panel-state assoc :date-field x))}]
     [date-range {:start @(subscribe :date-range-start  :date-range :start)
                  :end @(subscribe :date-range-start   :date-range :end)
                  :on-input (fn [f] (swap! panel-state update :date-range f))
                  :on-error (fn [f] (swap! panel-state update-in [:errors :date-range] f))
                  :on-error-resolved (fn [f] (swap! panel-state update-in [:errors :date-range] f))}]
     [submit-button {:enabled? (not (contains-errors? @(subscribe :errors :errors)))
                     :on-click #(reset! panel-state {:date-field ""
                                                     :date-range {:start ""
                                                                  :end ""}})}]]))
