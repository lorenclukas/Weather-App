import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  searchCity(cityName: string) {
    return this.http.get<any[]>(
      `${environment.geoApi}?q=${cityName}&limit=1&appid=${this.apiKey}`
    );
  }

  getWeatherData(lat: number, lon: number) {
    return this.http.get<any>(
      `${environment.weatherApi}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&exclude=minutely,alerts,hourly&units=metric`
    );
  }
}
