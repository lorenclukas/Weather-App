import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from 'src/app/services/weather-data/weather-data.service';

@Component({
  selector: 'app-hourly-forecast',
  templateUrl: './hourly-forecast.component.html',
  styleUrls: ['./hourly-forecast.component.scss'],
})
export class HourlyForecastComponent {
  forecast24Hours: any = null;
  forecastData: any;

  constructor(private weatherDataService: WeatherDataService) {}

  ngOnInit() {
    this.forecast24Hours = this.weatherDataService
      .getWeatherData()
      .hourly.slice(1, 6);
    console.log(this.forecast24Hours);
    this.forecastData = this.weatherDataService.getWeatherData();
  }
}
