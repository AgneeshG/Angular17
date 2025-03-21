import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarLogComponent } from '../../navbar-log/navbar-log.component';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule, NavbarLogComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  formData = {
    name:"",
    email:"",
    password:""
  }
  submit=false
  errorMessage = ""
  loading=false

  constructor(public service:ServiceService){

  }
  ngOnInit(): void {
    this.canAuthenticate()
  }

  register(name:string, email:string, password:string){
    //send data to register api (firebase)
    return this.service.http.post<{idToken:string}>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBHbFJxrjMX7XvHR9SIBj9OPVlIEchfLZY',{displayName:name,email:email, password:password});
  }

  storeToken(token:string){
    sessionStorage.setItem('token',token)
  }
  isAuthenticated():boolean{
    return this.service.isAuthenticated()
  }
  canAuthenticate(){
    return this.service.canAuthenticate()
  }
onSubmit(){
    this.loading = true

    // call register service
    this.register(this.formData.name, this.formData.email, this.formData.password)
    .subscribe({
      next:data=>{
        // store token from response data
        this.storeToken(data.idToken);
        console.log('Register idToken is '+data.idToken); 
        this.canAuthenticate()
      },
      error:data=>{
        if(data.error.error.message=="INVALID_EMAIL"){
          this.errorMessage = "Invalid Email!"
        }
        // else if(data.error.error.message="EMAIL_EXISTS"){
        //   this.errorMessage = "Already Email Exists!"
        // }
        else{
          this.errorMessage = "Unknown error occoured when creating this account"
        }
      }
    }).add(()=>{
      this.loading = false
      console.log("Register completed!");

    })
  }
}
