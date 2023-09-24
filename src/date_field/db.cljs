(ns date-field.db)


(def default-db
  {:name "re-frame"
   :form-data {:date-field 
               :date-range 
               ;; can be :empty-form, :validating-fields, :invalid, :valid
               :form-validation :empty-form}})
