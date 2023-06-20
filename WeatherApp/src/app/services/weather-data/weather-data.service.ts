import { Injectable } from '@angular/core';
import { GeoCode } from 'src/app/interfaces/geo.interface';
import { Weather } from 'src/app/interfaces/weather.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherDataService {
  private weatherData!: Weather;
  private cityData!: GeoCode;

  setWeatherData(data: Weather) {
    this.weatherData = data;
  }

  getWeatherData(): Weather {
    return this.weatherData;
  }

  setCityData(data: GeoCode) {
    this.cityData = data;
  }

  getCityData(): GeoCode {
    return this.cityData;
  }
}
