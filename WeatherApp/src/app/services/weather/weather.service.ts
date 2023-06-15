import { environment } from 'src/environments/environment.development';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  searchCity(cityName: string): Observable<any> {
    return this.http.get<any[]>(
      `${environment.geoApi}?q=${cityName}&limit=1&appid=${this.apiKey}`
    );
  }

  getWeatherData(lat: number, lon: number): Observable<any> {
    return this.http.get<any>(
      `${environment.weatherApi}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&exclude=minutely,alerts&units=metric`
    );
  }
}
