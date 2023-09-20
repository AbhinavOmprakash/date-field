(ns date-field.events
  (:require
    [date-field.db :as db]
    [re-frame.core :as rf]))


(rf/reg-event-db
  ::initialize-db
  (fn [_ _]
    db/default-db))


(defn valid-date-format?
  [date]
  (or (empty? date)
      ;; FYI this is a bad way to validate dates.
      ;; you should rely on your underlying date-time library
      ;; for this validation but for the blogpost this is
      ;; good enough
      (boolean (re-matches #"[\d]{4}\-[\d]{2}\-[\d]{2}" date))))


(defn date-field-default-state
  [db id]
  (-> db
      (assoc-in [:date-field id :value] "")
      (assoc-in [:date-field id :invalid?] false)
      (assoc-in [:date-field id :show-message?] false)
      (assoc-in [:date-field id :message] "Invalid date format, use YYYY-MM-DD")
      (assoc-in [:errors :date-field id] {:error? false :type nil})))


(rf/reg-event-db
  ::initialize-date-field
  (fn [db [_ id]]
    (assert (false? (contains? (:date-field db) id))
            (str "id:" id " for date-field already exists"))
    (date-field-default-state db id)))


(rf/reg-event-db
  ::reset-date-field
  (fn [db [_ id]]
    (date-field-default-state db id)))


(defn date-range-default-state
  [db id]
  (-> db
      (assoc-in [:date-range id :start] "")
      (assoc-in [:date-range id :end] "")
      (assoc-in [:date-range id :invalid?] false)
      (assoc-in [:errors :date-range id] {:error? false :type nil})))


(rf/reg-event-db
  ::initialize-date-range
  (fn [db [_ id]]
    (assert (false? (contains? (:date-range db) id))
            (str "id:" id " for date-range already exists" db))
    (date-range-default-state db id)))


(rf/reg-event-db
  ::reset-date-range
  (fn [db [_ id]]
    (date-range-default-state db id)))


(rf/reg-event-db
  ::input-date-field
  (fn [db [_ id value]]
    (let [invalid? (not (valid-date-format? value))]
      (-> db
          (assoc-in [:date-field id :value] value)
          (assoc-in [:date-field id :invalid?] invalid?)
          (assoc-in [:errors :date-field id :error?] invalid?)
          (assoc-in [:errors :date-field id :type] (if invalid? :invalid-date-form nil))
          (assoc-in [:date-field id :show-message?] invalid?)))))


(defn dates-are-ascending?
  [a b]
  ;; naive date comparator
  ;; converts DD-MM-YYYY to yyyy-mm-dd and compares the strings
  (and (valid-date-format? a)
       (valid-date-format? b)
       (let [comp- (compare a b)]
         (or (neg? comp-)
             (zero? comp-)))))


(rf/reg-event-db
  ::input-start-date-field
  (fn [db [_ id start-date]]
    (let [end-date (get-in db [:date-range id :end])
          invalid? (not (dates-are-ascending? start-date end-date))]
      (-> db
          (assoc-in [:date-range id :start] start-date)
          (assoc-in [:date-range id :invalid?] invalid?)
          (assoc-in [:errors :date-range id :error?] invalid?)
          (assoc-in [:errors :date-range id :type] (if invalid? :start-date-is-after-end-date nil))))))


(rf/reg-event-db
  ::input-end-date-field
  (fn [db [_ id end-date]]
    (let [start-date (get-in db [:date-range id :start])
          invalid? (not (dates-are-ascending? start-date end-date))]
      (-> db
          (assoc-in [:date-range id :end] end-date)
          (assoc-in [:date-range id :invalid?] invalid?)
          (assoc-in [:errors :date-range id :error?] invalid?)
          (assoc-in [:errors :date-range id :type] (if invalid? :end-date-is-before-end-date nil))))))


(rf/reg-event-db
  ::disable-submit-button
  (fn [db [_ id]]
    (assoc-in db [:submit-button id :disabled?] true)))


(rf/reg-event-db
  ::enable-submit-button
  (fn [db [_ id]]
    (assoc-in db [:submit-button id :disabled?] false)))


(def submit prn)


(rf/reg-event-db
  ::submit-form-data
  ;; dummy fn
  (fn [db [_ data]]
    (submit ::submit-form-data data)
    db))
