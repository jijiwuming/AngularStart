import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Weather } from './model/weather';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private weather: Weather;

  constructor(
    private service: MainService
  ) { }

  ngOnInit() {
  }

  getweather() {
    this.service.getWeather().subscribe(res => {
      console.log('响应', res);
      this.weather = res;
    })
  }
}
