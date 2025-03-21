import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
// import { Routes } from '@angular/router';
import { routes } from './app.routes';


// const appRoutes: Routes = [
//   {path:'', component:HomeComponent},
//   {path:'', component:AboutComponent},
//   {path:'', component:ContactUsComponent}
// ];
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, AboutComponent, ContactUsComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  a = RouterModule.forRoot(routes)
  title = 'routers'; 
}
