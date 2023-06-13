import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent {
  cityName = '';

  @Input() forecastData: any;
  forecastFiveDays: any[] = [];

  getForecast() {
    this.forecastFiveDays = [];
    if (this.forecastData && this.forecastData.daily) {
      for (let i = 0; i < 5; i++) {
        this.forecastFiveDays.push(this.forecastData.daily[i]);
      }
    }
  }
}
