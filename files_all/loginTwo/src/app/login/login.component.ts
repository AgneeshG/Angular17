import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { EmailValidator, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';





@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent, FormsModule, CommonModule, RouterModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  formData = {
    email:"",
    password:""
  }
  submit=false
  loading=false
  errorMessage=""
constructor(private http:HttpClient, private router:Router){}

ngOnInit(): void {
  this.canAuthenticate()
}


storeToken(token:string){
  sessionStorage.setItem('token',token)
}

login(email:string, password:string){
  // send data to login api (firebase)
  return this.http.post<{idToken:string}>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBHbFJxrjMX7XvHR9SIBj9OPVlIEchfLZY',
  {email, password});
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
      this.router.navigate(['/dashboard']);
    }
  }

onSubmit(){
this.loading=true
// call login service
this.login(this.formData.email, this.formData.password)
.subscribe({
  next:data=>{
    // store token
  this.storeToken(data.idToken) 
  console.log('Logged user toke is '+ data.idToken);
  this.canAuthenticate()
  },
  error:data=>{
    if(data.error.error.message=="INVALID_PASSWORD" || data.error.error.message=="INVALID_EMAIL"){
      this.errorMessage="Invalid credentials"
    } 
    else {
      this.errorMessage="Unknown error when logging into this account!"
    }
  }
}).add(()=>{
  this.loading=false
  console.log('Login process completed!');
  
})
}





}

