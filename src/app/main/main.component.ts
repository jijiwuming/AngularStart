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
  private count1: number = 0;
  private count2: number = 0;

  constructor(
    private service: MainService
  ) { }

  ngOnInit() {
  }

  // 普通点击
  generalClick() {
    this.count1++;
  }
  // 节流点击
  debounceClick() {
    this.count2++;
  }
  // 请求天气
  getweather() {
    this.service.getWeather().subscribe(res => {
      console.log('响应', res);
      this.weather = res;
    })
  }
}
