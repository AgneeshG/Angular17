import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseModel, Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  apiURL = "https://freeapi.gerasim.in/api/JWT/"

  constructor(private http: HttpClient) { }

  getAllTaskList(): Observable<ApiResponseModel>{
    return this.http.get<ApiResponseModel>(this.apiURL + 'GetAllTaskList')
  }

  addNewTask(obj : Task):Observable<ApiResponseModel>{
    return this.http.post<ApiResponseModel>(this.apiURL + 'CreateNewTask', obj) 
  }


}
