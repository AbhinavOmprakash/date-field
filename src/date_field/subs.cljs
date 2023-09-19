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
    ;; (prn ::date-field :id id (get-in db [:date-field id]))
    (get-in db [:date-field id])))


(rf/reg-sub
  ::date-range
  (fn [db [_ id]]
    ;; (prn ::date-field :id id (get-in db [:date-field id]))
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
