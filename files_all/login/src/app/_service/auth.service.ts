// import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
 
const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    }
  )
};
// 
// @Injectable({
  // providedIn: 'root',
// })
// 
// 
  // @NgModule({
    // declarations: [
    // ],
    // imports: [
      // BrowserModule,
      // HttpClientModule // Add HttpClientModule to imports
    // ],
    // providers: [], // You can provide services here if needed
  // })
export class AuthService {
  
  constructor(private router:Router, private http:HttpClient) { }

  isAuthenticated():boolean{
    if(sessionStorage.getItem('token')!==null){
      return true
    }
    return false
  }

  canAccess(){
    if(!this.isAuthenticated()){
      // redirect to login
      this.router.navigate(['/login'])
    }
  }

  register(name:string, email:string, password:string){
    //send data to register api (firebase)
    return this.http.post<{idToken:string}>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBHbFJxrjMX7XvHR9SIBj9OPVlIEchfLZ',{displayName:name,email, password});
  }

  storeToken(token:string){
    sessionStorage.setItem('token',token)
  }
}


  // export class AppModule { }


