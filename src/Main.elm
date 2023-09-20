module Main exposing (..)
import Browser
import Html exposing (Html, button, div, text, input)
import Html.Events exposing (onClick)
import Html.Attributes exposing (value, placeholder, class)

main =
  Browser.sandbox {init = 0, update = update, view = view}

type Msg = Increment | Decrement

update msg model =
  case msg of
  Increment -> model + 1

  Decrement -> model - 1


dateField model=
  input [placeholder "YYYY-MM-DD", class "input"] []

submitButton =
  button [class "button is-primary"][text "submit"]

view model =
  div []
  [dateField model, submitButton]
