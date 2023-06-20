import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Weather } from 'src/app/interfaces/weather.interface';

@Component({
  selector: 'app-hourly-forecast',
  templateUrl: './hourly-forecast.component.html',
  styleUrls: ['./hourly-forecast.component.scss'],
})
export class HourlyForecastComponent implements OnChanges {
  forecast24Hours: any = null;
  @Input() forecastData!: Weather;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['forecastData'] && changes['forecastData'].currentValue) {
      this.updateForecast24Hours();
    }
  }

  private updateForecast24Hours(): void {
    this.forecast24Hours = this.forecastData.hourly.slice(0, 24);
  }
}
