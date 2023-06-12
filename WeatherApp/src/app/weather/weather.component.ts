import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  cityName = '';
  weatherData: any = null;
  cityData: any = null;

  constructor(private weatherService: WeatherService) {}

  searchCity() {
    this.weatherService.searchCity(this.cityName).subscribe({
      next: (data) => {
        if (data.length > 0) {
          const { lat, lon } = data[0];
          this.cityData = data[0];
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
      },
      error: (error) => {
        console.log('Error occurred while fetching weather data');
      },
    });
  }
}
