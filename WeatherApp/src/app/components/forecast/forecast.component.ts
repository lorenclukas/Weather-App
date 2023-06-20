import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../../services/weather-data/weather-data.service';
import { Weather } from 'src/app/interfaces/weather.interface';
import { GeoCode } from 'src/app/interfaces/geo.interface';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  forecastData!: Weather;
  forecastSevenDays: any[] = [];
  cityData!: GeoCode;

  constructor(private weatherDataService: WeatherDataService) {}

  ngOnInit(): void {
    this.forecastData = this.weatherDataService.getWeatherData();
    this.getForecast();
    this.cityData = this.weatherDataService.getCityData();
  }

  getForecast(): void {
    if (this.forecastData && this.forecastData.daily) {
      for (let i = 1; i < 8; i++) {
        this.forecastSevenDays.push(this.forecastData.daily[i]);
      }
    }
  }
}
