import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [NavbarComponent,HttpClientModule]
})
export class DashboardComponent {
  user = {
  localId:"",
  displayName:"",
  profilePhoto:"" 
}
  constructor(private router:Router, private http:HttpClient){}
  ngOnInit(): void {
    this.canAccess()
    if(this.isAuthenticated()){
      // call the user details service
      this.detail().subscribe({
        next:data=>{
          this.user.localId = data.users[0].localId;
          this.user.displayName = data.users[0].displayName;
          this.user.profilePhoto = data.users[0].photo;
          alert(this.user.profilePhoto)
        }
      })
    }
  }

  url="./assets/one.jpg";

  canAccess(){
    if(!this.isAuthenticated()){
      // redirect to login
      this.router.navigate(['/login'])
    }
}
isAuthenticated():boolean{
  if(sessionStorage.getItem('token')!==null){
    return true
  }
  return false
}
storeToken(token:string){
  sessionStorage.setItem('token',token)
}

detail(){
  let token = sessionStorage.getItem('token')
  return this.http.post<{users:Array<{localId:string, displayName:string, photo:string}>}>(
    'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBHbFJxrjMX7XvHR9SIBj9OPVlIEchfLZY',
    {idToken:token}
  )
}


onSelectFile(e:any){
  if(e.target.files){
    var reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload=(event:any)=>{
      this.url=event.target.result;
    }
  }
}
}
