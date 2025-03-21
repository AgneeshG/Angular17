import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { NavbarLogComponent } from '../../navbar-log/navbar-log.component';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule, CommonModule,RouterModule,NavbarLogComponent],
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

  constructor(private service:ServiceService){

  }

  ngOnInit(): void {
    this.canAuthenticate()
  }

  storeToken(token:string){
    return this.service.storeToken(token)
  }
  login(email:string, password:string){
    return this.service.login(email,password)
  }
  isAuthenticate(){
    return this.service.isAuthenticated()
  }
  canAuthenticate(){
    return this.service.canAuthenticate()
  }

  onSubmit(){
    this.loading=true
    // call login service
    this.service.login(this.formData.email, this.formData.password)
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
