import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../_service/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NavbarComponent, FormsModule, CommonModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  constructor(private auth:AuthService, ){

  }
  formData = {
    name:"",
    email:"",
    password:""
  }
  submit=false
  errorMessage = ""
  loading=false

  onSubmit(){
    this.loading = true

    // call register service
    this.auth.register(this.formData.name, this.formData.email, this.formData.password)
    .subscribe({
      next:data=>{
        // store token from response data
        this.auth.storeToken(data.idToken);
        console.log('Register idToken is '+data.idToken); 
      },
      error:data=>{
        if(data.error.error.message=="INVALID_EMAIL"){
          this.errorMessage = "Invalid Email!"
        }
        else if(data.error.error.message="EMAIL_EXISTS"){
          this.errorMessage = "Already Email Exists!"
        }
        else{
          this.errorMessage = "Unknown error occoured when creating this account"
        }
      }
    }).add(()=>{
      this.loading = false
      console.log("Register completed!");
      
    })
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
