import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }
  get(url: string, params: {
    [param: string]: string | string[];
  }) {
    return this.http.get(url, {
      params
    });
  }
}
