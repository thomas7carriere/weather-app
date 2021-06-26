import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherLocationService } from '../weather-location.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm!: FormGroup;
  public weatherData: any;
  public invalidLocation: any;
  public imageLink: any;
  
  constructor(
    private formBuilder: FormBuilder,
    private weatherLocationService : WeatherLocationService
    ) {}

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToWeatherAPI(formValues: any){
    this.weatherLocationService.getWeather(formValues.location).subscribe(
      data => {
        this.invalidLocation = false;
        this.weatherData = data
        this.updateImage(this.weatherData.weather[0].icon)
        console.log(this.weatherData)},
      error =>{ 
        this.invalidLocation = true;
      });
  }

  updateImage(iconCode: any){
    this.imageLink = 'http://openweathermap.org/img/wn/' + iconCode + '@2x.png'
  }

}
