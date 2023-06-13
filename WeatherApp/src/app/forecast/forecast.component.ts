import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
})
export class ForecastComponent implements OnInit {
  @Input() forecastData: any;
  forecastFiveDays: any[] = [];

  ngOnInit() {
    this.getForecast();
  }

  getForecast() {
    this.forecastFiveDays = [];
    if (this.forecastData && this.forecastData.daily) {
      for (let i = 0; i < 5; i++) {
        this.forecastFiveDays.push(this.forecastData.daily[i]);
      }
      console.log(this.forecastFiveDays[1].weather[0].main);
    }
  }
}
