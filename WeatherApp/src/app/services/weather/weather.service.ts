import { environment } from 'src/environments/environment.development';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeoCode } from 'src/app/interfaces/geo.interface';
import { Weather } from 'src/app/interfaces/weather.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  searchCity(cityName: string): Observable<GeoCode[]> {
    return this.http.get<GeoCode[]>(
      `${environment.geoApi}?q=${cityName}&limit=1&appid=${this.apiKey}`
    );
  }

  getWeatherData(lat: number, lon: number): Observable<Weather> {
    return this.http.get<Weather>(
      `${environment.weatherApi}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&exclude=minutely,alerts&units=metric`
    );
  }
}
