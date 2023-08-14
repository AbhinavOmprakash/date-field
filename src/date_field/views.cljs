(ns date-field.views
  (:require
    [reagent.core :as r]))


(defonce subscriptions (atom {}))


(def panel-state
  (atom {:date-field ""
         :date-range {:start ""
                      :end ""}
         :errors  {:date-field false
                   :date-range {:start false
                                :end false}}}))


(defn subscribe
  [key_ ks]
  (let [f #(get-in % ks)
        atm (r/atom (f @panel-state))] ; initialize atom with state from panel-state

    ;; check if a subscription is already registered because react rerenders componnents, and you don't want to register 
    ;; a new subscription every time
    (if (contains? @subscriptions key_)
      (get-in @subscriptions [key_ :state])
      (do  (swap! subscriptions assoc key_ {:f #(get-in % ks)
                                            :state atm})
           atm))))

;; not important
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


(defn submit-button
  [{:keys [id subscription-path enabled? on-click]
    :or {enabled? true
         on-click identity}}]
  (let [errors @(subscribe id subscription-path)          ;; new
        enabled? (not (contains-errors? errors))]         ;; new
    [:button {:class ["button" "my-3"  "is-dark"]
              :disabled (not enabled?)
              :on-click on-click}
     "submit"]))


(defn valid-date-format?
  [date]
  (or (empty? date)
      ;; FYI this is a bad way to validate dates.
      ;; you should rely on your underlying date-time library
      ;; for this validation but for the blogpost this is
      ;; good enough
      (boolean (re-matches #"[\d]{2}\-[\d]{2}\-[\d]{4}" date))))


(defn date-field
  [{:keys [id subscription-path on-error on-error-resolved on-input]
    :or {on-error identity
         on-error-resolved identity
         on-input identity}}]
  (fn []
    (let [value @(subscribe id subscription-path)                                            ;; new
          valid-input? (valid-date-format? value)]
      (if valid-input? (on-error-resolved) (on-error))
      [:div [:input {:class ["input" (if valid-input? nil "is-danger")]
                     :type "text"
                     :value value
                     :placeholder "DD-MM-YYYY"
                     :on-input (fn [x] (on-input (-> x .-target .-value)))}]
       (when (not valid-input?)
         [:p {:class "help is-danger"} "incorrect input date format, use DD-MM-YYYY"])])))


(defn date-range
  [{:keys [on-input
           on-error
           id
           subscription-path
           on-error-resolved]}]
  [:div {:class ["my-6" "is-flex is-align-items-center "]}
   [:p {:class "pr-3"} "from"]
   [:span {:class "pr-3"}
    [date-field {:id (keyword (str (name id) "-" "start"))                                ;; new
                 :subscription-path (conj subscription-path :start)                       ;; new
                 :on-input (fn [x] (on-input #(assoc % :start x)))
                 :on-error (fn [] (on-error #(assoc % :start true)))
                 :on-error-resolved (fn [] (on-error-resolved #(assoc % :start false)))}]]
   [:p {:class "pr-3"} "to"]
   [:span {:class "pr-3"}
    [date-field {:id (keyword (str (name id) "-" "end"))                                  ;; new
                 :subscription-path (conj subscription-path :end)                         ;; new
                 :on-input (fn [x] (on-input #(assoc % :end x)))
                 :on-error (fn [] (on-error #(assoc % :end true)))
                 :on-error-resolved (fn [] (on-error-resolved #(assoc % :end false)))}]]])


(defn watch-and-call-subscriptions
  [_key _ref old-value new-value]
  ;; (prn " watch-and-call-subscriptions")
  ;; (prn "subs" @subscriptions)
  (doseq [[_  {:keys [f state]}] @subscriptions]
    (when (not= (f old-value) (f new-value))
      (reset! state (f new-value)))))


(add-watch panel-state :watch-global-state watch-and-call-subscriptions)


;; now the main-panel doesn't reference any atom!
(defn main-panel
  []
  (fn []
    [:div {:class ["container" "my-6"]}
     [date-field {:on-error (fn [] (swap! panel-state assoc-in [:errors :date-field] true))
                  :on-error-resolved (fn [] (swap! panel-state assoc-in [:errors :date-field] false))
                  :id :date-field
                  :subscription-path [:date-field]
                  :on-input (fn [x] (swap! panel-state assoc :date-field x))}]
     [date-range {:id :date-range
                  :subscription-path [:date-range]
                  :on-input (fn [f] (swap! panel-state update :date-range f))
                  :on-error (fn [f] (swap! panel-state update-in [:errors :date-range] f))
                  :on-error-resolved (fn [f] (swap! panel-state update-in [:errors :date-range] f))}]
     [submit-button {:id :submit-button
                     :subscription-path [:errors]
                     :on-click #(reset! panel-state {:date-field ""
                                                     :date-range {:start ""
                                                                  :end ""}})}]]))
