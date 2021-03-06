import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherLocationService {

  private weatherAPIKey : String = 'a10c4153bb80b74b36780b74109387e9';

  constructor(private http: HttpClient) {}
  
  //Makes request to weather API
  getWeather(location: any){
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.weatherAPIKey}&units=metric`);
  }

  //Makes request for the user's city
  getLocation(){

  }
}
