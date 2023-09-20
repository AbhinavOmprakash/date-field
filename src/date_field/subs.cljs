(ns date-field.subs
  (:require
    [re-frame.core :as rf]))


(rf/reg-sub
  ::name
  (fn [db]
    (:name db)))


(rf/reg-sub
  ::date-field
  (fn [db [_ id]]
    (get-in db [:date-field id])))


(rf/reg-sub
  ::date-range
  (fn [db [_ id]]
    (get-in db [:date-range id])))


(rf/reg-sub
  ::errors
  :-> :errors)


(rf/reg-sub
  ::main-panel-invalid?
  :<- [::errors]
  (fn [errors [_ components-with-ids]]
    (let [paths (mapcat (fn [[k v]]
                          (map #(vector k % :error?) v))
                        components-with-ids)
          invalid? (not (every? false? (map #(get-in errors %) paths)))]
      (prn "invalid?" invalid?)
      invalid?)))


(rf/reg-sub
  ::submit-button-disabled?
  (fn [db [_ id]]
    (get-in db [:submit-button id :disabled?])))


(rf/reg-sub
  ::date-range-data
  (fn [db [_ id]]
    (select-keys  (get-in db [:date-range id]) [:start :end])))


(rf/reg-sub
  ::date-field-data
  (fn [db [_ id]]
    {:date (get-in db [:date-field id :value])}))
