import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'node:path';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'contact-us', component:ContactUsComponent}
];
