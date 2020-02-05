import { Injectable } from '@angular/core';
import { DataService } from '../core/data.service';
import { Weather } from './model/weather';
import { map } from 'rxjs/operators';

@Injectable()
export class MainService {

  constructor(private dataservice: DataService) { }

  // 获取天气数据
  getWeather() {
    const params = {
      version: 'v6',
      appid: '74742729',
      appsecret: 'owcrU4ef'
    };
    const url = 'https://tianqiapi.com/api';
    return this.dataservice.get(url, params).pipe(
      map(res => res as Weather)
    )
  }
}
