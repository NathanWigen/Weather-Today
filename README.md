# Project Overview

## Weather Today

https://nathanwigen.github.io/Weather-Today/

## Project Description

The website will allow you to enter a location and obtain weather data from an API and show the data to the user.

## API and Data Sample
API Website --  https://api.oceandrivers.com/static/docs.html#!/ODWeather/getWeatherDisplay_get_2

API -- https://api.oceandrivers.com:443/v1.0/getWeatherDisplay/seattle/?period=latestdata

Data Sample -- 
```
{
  "TWS_GUST_MAX": {
    "TIME_STRING": "19-9-2020 1:12_PM:00",
    "VALUE": "21.0"
  },
  "TWD": 256,
  "HUMIDEX": 33.8,
  "TWS": 13.4,
  "LOCALTIME": 2,
  "HUMIDITY_IN": 100,
  "WINDCHILL": 25.9,
  "TEMP_IN": 38,
  "ICON_NOW": "5",
  "ICON_FOR": "5",
  "TEMPERATURE": 25.9,
  "TWS_GUST": 13.9,
  "RAIN": 0,
  "PRESSURE": 1013.3,
  "LONGITUDE": 2.733,
  "ACTIVE": "ON",
  "PRESSURE_TR": -0.2,
  "RAIN_MONTH": 59.8,
  "RAIN_DAY": 0,
  "HUMIDITY": 71,
  "TIME_STRING": "19-9-2020 17:04:24",
  "TIME": 1600527864000,
  "LATITUDE": 39.5,
  "WEATHER_DES": "Dry"
}
```

## Wireframes

https://www.figma.com/file/hsPE7vOhGGzVipOKeDDzQx/Untitled?node-id=0%3A1 -- Desktop

### MVP/PostMVP

#### MVP 

- Use Weather API to retrieve data and append data to DOM.
- Show API Data on the webpage from users input location.
- Clear old Weather data.

#### PostMVP  

- Change background to what weather user inputs.
- Use second API to show different weather data.
- Grab Font from Google Fonts.


## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Sept 18-21| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Sept 21| Project Approval | Complete
|Sept 22| Core Application Structure (HTML, CSS, etc.) | Complete
|Sept 23| MVP | Complete
|Sept 24| Post MVP/Styling | Complete
|Sept 25| Presentations | Incomplete

## Priority Matrix

https://docs.google.com/drawings/d/1H-B1lQaWeTxVBeJkpqhZavImJDeMT4nZD570-kOK27s/edit?usp=sharing

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML Core Code | H | 3hrs| 3hrs | 1hr |
| JS Core Code | H | 8hrs| 8hrs | 10hrs |
| Select Color Palette in CSS | M | 3hrs| 2hrs  | 30min |
| CSS Styling | M | 3hrs| 1hr | 3hrs |
| JS Debugging | M | 3hrs| 5hrs | 6hrs |
| HTML Debugging | H | 2hrs| 2hrs | 30min |
| CSS Debugging | H | 3hrs| 2hrs | 30min |
| Working with API | H | 3hrs| 3hrs | 1hr 30min |
| Total | H | 28hrs| 26hrs | 22hrs |

## Code Snippet
This is the snippet of code that I am most proud of because I figured out how to use string concatenation with out any help.

```
  let condEle = document.createElement('h3')
  condEle.textContent = `Outside weather is ${weatherResponse.WEATHER_DES}.`
  document.querySelector('h2').append(condEle)
```
## Change Log