import { Component } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent {
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
        console.log(this.weatherData);
      },
      error: (error) => {
        console.log('Error occurred while fetching weather data');
      },
    });
  }
}
