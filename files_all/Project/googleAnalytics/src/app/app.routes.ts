import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import path from 'path';
import { LoginComponent } from './components/login/login.component';
import { ChartsComponent } from './components/charts/charts.component';
import { MainChartsComponent } from './chartComponents/charts/charts.component';

export const routes: Routes = [
    {path:"", redirectTo:"charts_main",pathMatch:"full"},
    {path:"register", component:RegisterComponent},
    {path:"login",component:LoginComponent},
    {path:"charts",component:ChartsComponent},
    {path:"charts_main", component:MainChartsComponent}
];
