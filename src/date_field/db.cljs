(ns date-field.db)


(def default-db
  {:name "re-frame"
   ;; can be :empty-form, :validating-fields, :invalid, :valid
   :form-data {:form-validation :empty-form}})
