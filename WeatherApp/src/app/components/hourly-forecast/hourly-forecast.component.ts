import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hourly-forecast',
  templateUrl: './hourly-forecast.component.html',
  styleUrls: ['./hourly-forecast.component.scss'],
})
export class HourlyForecastComponent {
  forecast24Hours: any = null;
  @Input() forecastData: any;

  constructor() {}

  ngOnInit() {
    this.forecast24Hours = this.forecastData.hourly.slice(1, 6);
    console.log(this.forecast24Hours);
  }
}
