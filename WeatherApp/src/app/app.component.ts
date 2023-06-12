import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'WeatherApp';
  cityName = '';
  weatherData: any = null;
  cityData: any = null;

  constructor(private http: HttpClient) {}

  searchCity() {
    this.http
      .get<any[]>(
        `http://api.openweathermap.org/geo/1.0/direct?q=${this.cityName}&limit=1&appid=4e0f62859c4b83cad567e0bd3a648de1`
      )
      .subscribe({
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
    this.http
      .get<any>(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=4e0f62859c4b83cad567e0bd3a648de1&exclude=minutely,daily,alerts,hourly&units=metric`
      )
      .subscribe({
        next: (data) => {
          this.weatherData = data;
        },
        error: (error) => {
          console.log('Error occurred while fetching weather data');
        },
      });
  }
}
