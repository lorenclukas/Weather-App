import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherDataService {
  private weatherData: any = null;
  private cityData: any = null;

  setWeatherData(data: any) {
    this.weatherData = data;
  }

  getWeatherData() {
    return this.weatherData;
  }

  setCityData(data: any) {
    this.cityData = data;
  }

  getCityData() {
    return this.cityData;
  }
}
