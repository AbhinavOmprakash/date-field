module Main exposing (..)
import Debug exposing (log) 
import Regex
import Browser
import Html exposing (Html, button, div, text, input, p, span)
import Html.Events exposing (onClick, onInput)
import Html.Attributes exposing (value, placeholder, class)


type DateStatus 
  = EmptyDate
  | ValidDate 
  | InvalidDateFormat
  | InvalidDateWithCustomMsg

type DateRangeValidation 
  = EmptyDateRange
  | InvalidStartDate
  | InvalidEndDate
  | InvalidDateRange


type LastEditedDateRangeField 
  = StartDate
  | EndDate
  | NoField

type alias DateRange = 
  {  startDate : DateField
   , endDate : DateField
   , dateRangeValidation : DateRangeValidation
   , lastEdited : LastEditedDateRangeField
  }

type alias DateField = 
  { value : String
  , dateValidation : DateStatus
  , onClick : (String -> Msg)}

type alias Model =
  { date : DateField
  , dateRange: DateRange
  }

type Msg 
  = UpdateDate String
  | UpdateStartDate String
  | UpdateEndDate String

isValidDateFormat: String -> Bool
isValidDateFormat s =
  Regex.contains (Maybe.withDefault Regex.never <| Regex.fromString "[\\d]{4}\\-[\\d]{2}\\-[\\d]{2}" ) s

validateDate: String -> DateStatus 
validateDate date =
  let 
      dateStatus =
        if date == "" then 
          EmptyDate
        else if not (isValidDateFormat date) then
          InvalidDateFormat
        else 
          ValidDate
  in 
    dateStatus

update : Msg -> Model -> Model 
update msg model =
  case msg of
    UpdateDate newDate -> 
      { model | date = DateField newDate (validateDate newDate) model.date.onClick }

    UpdateStartDate newDate -> 
      let 
          dateRangeOld = model.dateRange
          oldStartDate = dateRangeOld.startDate 
          newStartDate = {oldStartDate | value = newDate, dateValidation = (validateDate newDate)}
          dateRangeNew = {dateRangeOld | startDate = newStartDate} 
      in
      { model | dateRange = dateRangeNew}
    UpdateEndDate newDate -> 
      let 
          dateRangeOld = model.dateRange
          oldEndDate = dateRangeOld.endDate 
          newEndDate = {oldEndDate | value = newDate, dateValidation = (validateDate newDate)}
          dateRangeNew = {dateRangeOld | endDate = newEndDate} 
      in
      { model | dateRange = dateRangeNew}

dateField: DateField -> Html Msg
dateField datefield =
  div [] 
      [input [placeholder "YYYY-MM-DD"
             , class "input"
             , onInput datefield.onClick
             , value datefield.value] [],
       p [class "help is-danger"][ if datefield.dateValidation == InvalidDateFormat then text "InvalidDateFormat, use YYYY-MM-DD" 
             else text ""]]

dateRange: DateRange -> Html Msg
dateRange model = 
  div [class "my-6 is-flex is-align-items-center"] 
  [p [class "pr-3"] [text "from"]
  , span [class "pr-3"] [dateField model.startDate]
  , p [class "pr-3"] [text "from"]
  , span [class "pr-3"] [dateField model.endDate]] 



submitButton =
  button [class "button is-dark"][text "submit"]

view model =
  div [class "container"]
  [ dateField model.date
  , dateRange model.dateRange
  , submitButton]


main =
  Browser.sandbox {  init = { date = DateField "" EmptyDate UpdateDate
                             , dateRange = DateRange (DateField "" EmptyDate  UpdateStartDate) (DateField "" EmptyDate  UpdateEndDate)  EmptyDateRange NoField
                            }
                   , update = update
                   , view = view}
