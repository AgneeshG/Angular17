import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { register } from 'module';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarLogComponent } from './navbar-log/navbar-log.component';
import { NgModel } from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat'
import { ModuleModule } from './module/module.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RegisterComponent, LoginComponent,NavbarLogComponent, ModuleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'googleAnalytics';
}
