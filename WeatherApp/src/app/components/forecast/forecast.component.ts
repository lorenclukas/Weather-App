import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../../services/weather-data/weather-data.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  forecastData: any;
  forecastFiveDays: any[] = [];
  cityData: any;

  constructor(private weatherDataService: WeatherDataService) {}

  ngOnInit() {
    this.forecastData = this.weatherDataService.getWeatherData();
    this.getForecast();
    this.cityData = this.weatherDataService.getCityData();
  }

  getForecast() {
    this.forecastFiveDays = [];
    if (this.forecastData && this.forecastData.daily) {
      for (let i = 0; i < 5; i++) {
        this.forecastFiveDays.push(this.forecastData.daily[i]);
      }
    }
  }
}
