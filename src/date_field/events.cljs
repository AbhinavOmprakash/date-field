(ns date-field.events
  (:require
    [clojure.string :as str]
    [date-field.db :as db]
    [re-frame.core :as re-frame]))


(def default-datefield-message "incorrect input date format, use DD-MM-YYYY")


(def default-date-field
  {:value ""
   :date-validation :empty-date  ; can be :empty-date, :invalid, :valid
   :message default-datefield-message})


(def default-date-range
  {:start-date default-date-field
   :end-date default-date-field
   ;; can be :empty-date-range, :validating-date-fields, :valid, :invalid
   :date-range-validation :empty-date-range})


(re-frame/reg-event-db
  ::initialize-db
  (fn [_ _]
    (-> db/default-db
        (assoc-in [:form-data :date-field] default-date-field)
        (assoc-in [:form-data :date-range] default-date-range))))


(defn dates-are-ascending?
  [a b]
  ;; naive date comparator
  ;; converts DD-MM-YYYY to yyyy-mm-dd and compares the strings
  (let [[d-a m-a y-a]  (str/split a #"-")
        [d-b m-b y-b]  (str/split b #"-")
        comp- (compare (str/join "-" [y-a m-a d-a]) (str/join "-" [y-b m-b d-b]))]
    (or (neg? comp-)
        (zero? comp-))))


(defn valid-date-format?
  [date]
  (or (empty? date)
      ;; FYI this is a bad way to validate dates.
      ;; you should rely on your underlying date-time library
      ;; for this validation but for the blogpost this is
      ;; good enough
      (boolean (re-matches #"[\d]{2}\-[\d]{2}\-[\d]{4}" date))))


(defn update-datefield
  [_ new-date date-validation message]
  {:value new-date
   :date-validation date-validation
   :message message})


(re-frame/reg-event-fx
  ::update-date-field
  (fn [{:keys [db]} [_ new-date]]
    (let [date-validation (cond
                            (= new-date "") :empty-date
                            (valid-date-format? new-date) :valid
                            :else :invalid)
          db* (update-in db [:form-data :date-field]
                         update-datefield
                         new-date
                         date-validation
                         default-datefield-message)]
      {:db db*
       :dispatch [::validate-form]})))


(defn update-date-range
  [date-range date-range-validation]
  (assoc date-range :date-range-validation date-range-validation))


(re-frame/reg-event-fx
  ::update-start-date
  (fn [{:keys [db] :as cofx} [_ new-date]]
    (let [date-range (-> db :form-data :date-range)
          start-date-validation (cond
                                  (= new-date "") :empty-date
                                  (valid-date-format? new-date) :valid
                                  :else :invalid)
          end-date (:end-date date-range)
          end-date-validation (:date-validation end-date)
          date-range-validation (cond
                                  (every? #{:empty-date} [start-date-validation end-date-validation])
                                  :empty-date-range

                                  (some #{:invalid}
                                        [start-date-validation end-date-validation])
                                  :validating-date-fields

                                  (every? #{:valid}
                                          [start-date-validation end-date-validation])
                                  (if (dates-are-ascending? new-date (:value end-date))
                                    :valid
                                    :invalid))
          start-date-message (if (= date-range-validation :invalid)
                               "Start date can't be after end date"
                               default-datefield-message)
          start-date-validation*  (if (= :invalid date-range-validation)
                                    :invalid
                                    start-date-validation)

          db* (-> db
                  (update-in [:form-data :date-range :start-date]
                             update-datefield
                             new-date
                             start-date-validation*
                             start-date-message)
                  (update-in [:form-data :date-range]
                             update-date-range
                             date-range-validation))]
      {:db db*
       :dispatch [::validate-form]})))


(re-frame/reg-event-fx
  ::update-end-date
  (fn [{:keys [db] :as cofx} [_ new-date]]
    (let [date-range (-> db :form-data :date-range)
          end-date-validation (cond
                                (= new-date "") :empty-date
                                (valid-date-format? new-date) :valid
                                :else :invalid)
          start-date (:start-date date-range)
          start-date-validation (:date-validation start-date)
          date-range-validation (cond
                                  (every? #{:empty-date} [start-date-validation end-date-validation])
                                  :empty-date-range

                                  (not (every? #{:valid}
                                               [start-date-validation end-date-validation]))
                                  :validating-date-fields

                                  (every? #{:valid}
                                          [start-date-validation end-date-validation])
                                  (if (dates-are-ascending? (:value start-date) new-date)
                                    :valid
                                    :invalid))
          end-date-message (if (= date-range-validation :invalid)
                             "End date can't be before Start date"
                             default-datefield-message)
          ;; end-date-validation is invalid if date-range-validation is invalid
          end-date-validation* (if (= :invalid date-range-validation)
                                 :invalid
                                 end-date-validation)
          db* (-> db
                  (update-in [:form-data :date-range :end-date]
                             update-datefield
                             new-date
                             end-date-validation*
                             end-date-message)
                  (update-in [:form-data :date-range]
                             update-date-range
                             date-range-validation))]

      {:db db*
       :dispatch [::validate-form]})))


(re-frame/reg-event-db
  ::validate-form
  (fn [{:keys [form-data] :as db}]
    (let [date-validation (get-in form-data [:date-field :date-validation])
          date-range-validation (get-in form-data [:date-range :date-range-validation])
          form-validation (cond
                            (and (= :valid date-validation)
                                 (= :valid date-range-validation))
                            :valid

                            (and (= :empty-date date-validation)
                                 (= :empty-date-range date-range-validation))
                            :empty-form

                            :else :invalid)]
      (update db :form-data (fn [data]
                              (assoc data :form-validation form-validation))))))


(re-frame/reg-event-db
  ::submit-form
  (fn [db]
    ;; extract necessary fields and send them to server 
    ;; clear the state from the form
    (-> db
        (assoc-in [:form-data :date-field] default-date-field)
        (assoc-in [:form-data :date-range] default-date-range))))
