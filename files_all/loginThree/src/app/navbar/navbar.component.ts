import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root',
// })

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,FormsModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router:Router){ }
  isAuthenticated():boolean{
    if(sessionStorage.getItem('token')!==null){
      return true
    }
    return false
  }
  storeToken(token:string){
    sessionStorage.setItem('token',token)
  }

  logout(){
    sessionStorage.removeItem('token')
    this.canAccess()
  }

  canAccess(){
    if(!this.isAuthenticated()){
      // redirect to login
      this.router.navigate(['/login'])
    }
  }
}
