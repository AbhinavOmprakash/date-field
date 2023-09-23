module Main exposing (..)
import Debug exposing (log) 
import Regex
import Browser
import Html exposing (Html, button, div, text, input, p)
import Html.Events exposing (onClick, onInput)
import Html.Attributes exposing (value, placeholder, class)


type alias Model =
  { date : String
  , dateValidtion: DateStatus}

type DateStatus 
  = EmptyDate
  | ValidDate 
  | InvalidDateFormat

type Msg 
  = UpdateDate String

isValidDateFormat: String -> Bool
isValidDateFormat s =
  Regex.contains (Maybe.withDefault Regex.never <| Regex.fromString "[\\d]{4}\\-[\\d]{2}\\-[\\d]{2}" ) s


validateDate: Model -> Model
validateDate model =
  let 
      dateStatus =
        if model.date == "" then 
          EmptyDate
        else if not (isValidDateFormat model.date) then
          InvalidDateFormat
        else 
          ValidDate
  in 
    {model | dateValidtion = dateStatus}

update : Msg -> Model -> Model 
update msg model =
  case msg of
    UpdateDate newDate -> 
      validateDate { model | date = newDate }

dateField: Model -> Html Msg
dateField model=
  div [] 
      [input [placeholder "YYYY-MM-DD"
             , class "input"
             , onInput UpdateDate
             , value model.date] [],
       p [class "help is-danger"][ if model.dateValidtion == InvalidDateFormat then text "InvalidDateFormat, use YYYY-MM-DD" 
             else text ""]]

submitButton =
  button [class "button is-dark"][text "submit"]

view model =
  div [class "container"]
  [dateField model, submitButton]


main =
  Browser.sandbox {init = { date = "", dateValidtion = EmptyDate}, update = update, view = view}
