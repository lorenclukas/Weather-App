export interface Weather {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: Current;
  hourly: Hourly[];
  daily: Daily[];
}

export interface Current {
  sunset: number;
  temp: number;
  feels_like: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  weather: WeatherCurrent[];
}

export interface WeatherCurrent {
  description: string;
  icon: string;
}

export interface Hourly {
  dt: number;
  temp: number;
  weather: HourlyWeather[];
}

export interface HourlyWeather {
  description: string;
  icon: string;
}

export interface Daily {
  dt: number;
  temp: Temp;
  weather: DailyWeather[];
}

export interface Temp {
  min: number;
  max: number;
}

export interface DailyWeather {
  description: string;
  icon: string;
}
