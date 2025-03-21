import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../_service/auth.service';
// import { RegisterComponent } from '../register/register.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor( public auth:AuthService) {
    
   }

  ngOnInit(): void {
  }
  logout(){
      // remove token
      // this.auth.removeToken();
      this.auth.canAccess();
  }
  storeToken(token:string){
    sessionStorage.setItem('token',token)
  }


  // isAuthenticated():boolean{
  //   if(sessionStorage.getItem('token')!==null){
  //     return true
  //   }
  //   return false
  // }

  // canAccess(){
  //   if(!this.isAuthenticated()){
  //     // redirect to login
  //     this.router.navigate(['/login'])
  //   }
  // }

  // register(name:string, email:string, password:string){
  //   //send data to register api (firebase)
  //   return this.http
  //   .post<{idToken:string}>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyBHbFJxrjMX7XvHR9SIBj9OPVlIEchfLZY',
  //     {displayName:name,email, password}
  //   );
  // }

  // storeToken(token:string){
  //   sessionStorage.setItem('token',token)
  // }
}


