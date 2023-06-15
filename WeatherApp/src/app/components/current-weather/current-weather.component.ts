import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather/weather.service';
import { WeatherDataService } from 'src/app/services/weather-data/weather-data.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent {
  cityName = '';
  weatherData: any = null;
  cityData: any = null;
  details: boolean = false;
  showHourlyForecast: boolean = false;

  constructor(
    private weatherService: WeatherService,
    private weatherDataService: WeatherDataService
  ) {}

  ngOnInit() {
    this.cityData = this.weatherDataService.getCityData();
    this.weatherData = this.weatherDataService.getWeatherData();
  }

  displayDetails() {
    this.details = !this.details;
  }

  searchCity() {
    this.weatherService.searchCity(this.cityName).subscribe({
      next: (data) => {
        if (data.length > 0) {
          const { lat, lon } = data[0];
          this.cityData = data[0];
          this.weatherDataService.setCityData(data[0]);
          this.getWeatherData(lat, lon);
        } else {
          console.log('City not found');
        }
      },
      error: (error) => {
        console.log('Error occurred while fetching city data');
      },
    });
  }

  getWeatherData(lat: number, lon: number) {
    this.weatherService.getWeatherData(lat, lon).subscribe({
      next: (data) => {
        this.weatherData = data;
        console.log(this.weatherData);
        this.weatherDataService.setWeatherData(data);
      },
      error: (error) => {
        console.log('Error occurred while fetching weather data');
      },
    });
  }
}
