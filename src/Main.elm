module Main exposing (..)
import Browser
import Html exposing (Html, button, div, text, input)
import Html.Events exposing (onClick, onInput)
import Html.Attributes exposing (value, placeholder, class)


type alias Model =
  { text : String }

type Msg = Clicked String

update msg model =
  case msg of
    Clicked newText -> 
      { model | text = newText}

dateField model=
  input [placeholder "YYYY-MM-DD"
         , class "input"
         , onInput Clicked
         , value model.text] []

submitButton =
  button [class "button is-dark"][text "submit"]

view model =
  div [class "container"]
  [dateField model, submitButton]


main =
  Browser.sandbox {init = {text = ""}, update = update, view = view}
