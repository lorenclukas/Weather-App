import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather/weather.service';
import { WeatherDataService } from 'src/app/services/weather-data/weather-data.service';
import { GeoCode } from 'src/app/interfaces/geo.interface';
import { Weather } from 'src/app/interfaces/weather.interface';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {
  cityName = '';
  weatherData!: Weather;
  cityData!: GeoCode;
  details: boolean = false;
  showHourlyForecast: boolean = false;

  constructor(
    private weatherService: WeatherService,
    private weatherDataService: WeatherDataService
  ) {}

  ngOnInit(): void {
    this.cityData = this.weatherDataService.getCityData();
    this.weatherData = this.weatherDataService.getWeatherData();
  }

  displayDetails(): void {
    this.details = !this.details;
  }

  searchCity(): void {
    console.log(this.cityData);
    this.weatherService.searchCity(this.cityName).subscribe({
      next: (data) => {
        if (data.length > 0) {
          const { lat, lon } = data[0];
          this.cityData = data[0];
          console.log(data);
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

  getWeatherData(lat: number, lon: number): void {
    this.weatherService.getWeatherData(lat, lon).subscribe({
      next: (data: Weather) => {
        this.weatherData = data;
        this.weatherDataService.setWeatherData(data);
        console.log(data);
      },
      error: (error) => {
        console.log('Error occurred while fetching weather data');
      },
    });
  }
}
