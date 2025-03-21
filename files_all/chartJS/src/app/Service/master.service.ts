import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http:HttpClient) { }

  getChartInfo(){
    return this.http.get("http://localhost:3000/sales");
  }
}
