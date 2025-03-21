import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-navbar-log',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './navbar-log.component.html',
  styleUrl: './navbar-log.component.css'
})
export class NavbarLogComponent {
  constructor(private router:Router, private service:ServiceService){

  }
  storeToken(token:string){
    return this.service.storeToken(token)
  }
  isAuthenticated(){
    return this.service.isAuthenticated()
  }
  canAccess(){
    if(!this.service.isAuthenticated()){
      // redirect to login
      this.router.navigate(['/login'])
    }
  }
  logout(){
    sessionStorage.removeItem('token')
    this.canAccess()
  }
}
