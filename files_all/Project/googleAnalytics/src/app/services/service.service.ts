import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { response } from 'express';
import { error } from 'console';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  year:number = 0
  params = new HttpParams().set('year',this.year)
  constructor(public http:HttpClient, public router:Router) { }

    storeToken(token:string){
      sessionStorage.setItem('token',token)
    }

    isAuthenticated():boolean{
      if (sessionStorage.getItem('token')!==null) {
          return true;
      }
      return false;
    }
    canAuthenticate(){
      if (this.isAuthenticated()) {
        //redirect to dashboard
        this.router.navigate(['/charts']);
      }
    }
    canAccess(){
      if(!this.isAuthenticated()){
        // redirect to login
        this.router.navigate(['/login'])
      }
  }
    login(email:string, password:string){
      // send data to login api (firebase)
      return this.http.post<{idToken:string}>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBHbFJxrjMX7XvHR9SIBj9OPVlIEchfLZY',
      {email, password});
      }

      
    getDataFromWebService(){
      return this.http.get<any>("http://localhost:3000/").subscribe(response=>{

      }, error=>{

      });
    }
}
