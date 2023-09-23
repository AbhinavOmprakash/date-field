module Main exposing (..)

import Browser
import Debug exposing (log)
import Html exposing (Html, button, div, input, p, span, text)
import Html.Attributes exposing (class, placeholder, value)
import Html.Events exposing (onClick, onInput)
import Regex


type DateStatus
    = EmptyDate
    | ValidDate
    | InvalidDateFormat
    | InvalidDateWithCustomMsg


type DateRangeValidation
    = EmptyDateRange
    | ValidDateRange
    | InvalidDateRange
    | ValidatingDateFields


type LastEditedDateRangeField
    = StartDate
    | EndDate
    | NoField


type alias DateRange =
    { startDate : DateField
    , endDate : DateField
    , dateRangeValidation : DateRangeValidation
    }


type alias DateField =
    { value : String
    , dateValidation : DateStatus
    , onClick : String -> Msg
    , message : String
    }


defaultDateFieldMsg =
    "InvalidDateFormat, use YYYY-MM-DD"


type alias Model =
    { date : DateField
    , dateRange : DateRange
    }


type Msg
    = UpdateDate String
    | UpdateStartDate String
    | UpdateEndDate String
    | SubmitFormData


isValidDateFormat : String -> Bool
isValidDateFormat s =
    Regex.contains (Maybe.withDefault Regex.never <| Regex.fromString "[\\d]{4}\\-[\\d]{2}\\-[\\d]{2}") s


validateDate : String -> DateStatus
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


validateDateRange : DateField -> DateField -> DateRangeValidation
validateDateRange startDate endDate =
    let
        startDateValid =
            log "startDateValid " (startDate.dateValidation == ValidDate)

        endDateValid =
            log "endDateValid" (endDate.dateValidation == ValidDate)
    in
    if startDateValid && endDateValid then
        if startDate.value <= endDate.value then
            ValidDateRange

        else
            InvalidDateRange

    else
        ValidatingDateFields


updateStartDate : String -> DateRange -> DateRange
updateStartDate newDate daterange =
    let
        dateRangeOld =
            daterange

        oldStartDate =
            dateRangeOld.startDate

        newStartDate =
            { oldStartDate | value = newDate, dateValidation = validateDate newDate, message = defaultDateFieldMsg }

        dateRangeNew =
            { daterange | startDate = newStartDate, dateRangeValidation = validateDateRange newStartDate dateRangeOld.endDate }

        dateRangeNewNew =
            if dateRangeNew.dateRangeValidation == InvalidDateRange then
                { dateRangeNew | startDate = { newStartDate | message = "Start date can't be after end date", dateValidation = InvalidDateWithCustomMsg } }

            else
                dateRangeNew
    in
    log "dateRangeNewNew" dateRangeNewNew


updateEndDate : String -> DateRange -> DateRange
updateEndDate newDate daterange =
    let
        dateRangeOld =
            daterange

        oldEndDate =
            dateRangeOld.endDate

        newEndDate =
            { oldEndDate | value = newDate, dateValidation = validateDate newDate, message = defaultDateFieldMsg }

        dateRangeNew =
            { dateRangeOld | endDate = newEndDate, dateRangeValidation = validateDateRange dateRangeOld.startDate newEndDate }

        newEndDateNew =
            { newEndDate | message = "End date can't be before start date", dateValidation = InvalidDateWithCustomMsg }

        dateRangeNewNew =
            if dateRangeNew.dateRangeValidation == InvalidDateRange then
                { daterange | endDate = newEndDateNew }

            else
                dateRangeNew
    in
    dateRangeNewNew


defaultDateField onClickFn =
    DateField "" EmptyDate onClickFn defaultDateFieldMsg


defaultDateRange =
    DateRange (defaultDateField UpdateStartDate)
        (defaultDateField UpdateEndDate)
        EmptyDateRange


update : Msg -> Model -> Model
update msg model =
    case msg of
        UpdateDate newDate ->
            { model | date = DateField newDate (validateDate newDate) model.date.onClick model.date.message }

        UpdateStartDate newDate ->
            { model | dateRange = updateStartDate newDate model.dateRange }

        UpdateEndDate newDate ->
            { model | dateRange = updateEndDate newDate model.dateRange }

        SubmitFormData ->
            { model | date = defaultDateField UpdateDate, dateRange = defaultDateRange }


dateField : DateField -> Html Msg
dateField datefield =
    div []
        [ input
            [ placeholder "YYYY-MM-DD"
            , class "input"
            , onInput datefield.onClick
            , value datefield.value
            ]
            []
        , p [ class "help is-danger" ]
            [ if (datefield.dateValidation == InvalidDateFormat) || (datefield.dateValidation == InvalidDateWithCustomMsg) then
                text datefield.message

              else
                text ""
            ]
        ]


dateRange : DateRange -> Html Msg
dateRange model =
    div [ class "my-6 is-flex is-align-items-center" ]
        [ p [ class "pr-3" ] [ text "from" ]
        , span [ class "pr-3" ] [ dateField model.startDate ]
        , p [ class "pr-3" ] [ text "from" ]
        , span [ class "pr-3" ] [ dateField model.endDate ]
        ]


submitButton =
    button
        [ class "button is-dark"
        , onClick SubmitFormData
        ]
        [ text "submit" ]


view model =
    div [ class "container" ]
        [ dateField model.date
        , dateRange model.dateRange
        , submitButton
        ]


main =
    Browser.sandbox
        { init =
            { date = defaultDateField UpdateDate
            , dateRange = defaultDateRange
            }
        , update = update
        , view = view
        }
