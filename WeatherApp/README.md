# Angular Weather App

This Angular app allows users to search for a city and view its current weather information as well as a 5-day forecast. It utilizes the OpenWeatherMap API to fetch weather data.

## Components

### CurrentWeatherComponent

- Displays the current weather information for a specified city.
- Includes a search form to input the city name and a button to submit the search.
- Retrieves the city's latitude and longitude coordinates from the `WeatherService` by calling the `searchCity()` method.
- Fetches the current weather data for the location using the obtained coordinates by calling the `getWeatherData()` method.
- Toggles additional weather details and shows/hides the hourly forecast.

### HourlyForecastComponent

- Receives the forecast data as an input from its parent component (`CurrentWeatherComponent`).
- Listens for changes to the `forecastData` input using the `ngOnChanges()` lifecycle hook.
- Updates the `forecast24Hours` variable by extracting the hourly forecast for the next 24 hours using the `updateForecast24Hours()` method.
- Renders the extracted hourly forecast data in the template.

### ForecastComponent

- Displays a 5-day forecast for a selected city.
- Retrieves the forecast data from the `WeatherDataService` and stores it in the `forecastData` variable.
- Extracts the weather data for the next 5 days from the `forecastData` by calling the `getForecast()` method.
- Stores the extracted forecast data in the `forecastFiveDays` variable and renders it in the template.
- Retrieves the city data from the `WeatherDataService` and stores it in the `cityData` variable.
- Allows users to navigate back to the home page (current weather view) by clicking the "Go back" button.

## Services

### WeatherService

- Communicates with the OpenWeatherMap API to search for a city and retrieve weather data.
- Includes methods like `searchCity()` to search for a city by name and `getWeatherData()` to fetch the weather data for a given location.

### WeatherDataService

- A shared service used to store and retrieve weather and city data across components.
- Provides methods like `setWeatherData()` and `getWeatherData()` to store and retrieve weather data.
- Provides methods like `setCityData()` and `getCityData()` to store and retrieve city data.

## Routing

- The Angular Router is used to set up the routing configuration in the `AppRoutingModule`.
- The default route (`path: ''`) leads to the `CurrentWeatherComponent`, which is the home page.
- The `/forecast` route leads to the `ForecastComponent`, which displays the 5-day forecast.
