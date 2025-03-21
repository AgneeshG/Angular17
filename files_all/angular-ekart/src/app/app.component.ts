import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OneComponent } from './one/one.component';
import { CarsFormComponent } from './cars-form/cars-form.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { TempComponent } from './temp/temp.component';
import { NoContentComponent } from './no-content/no-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, OneComponent, CarsFormComponent, NoContentComponent, CarsListComponent, TempComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'E-kart';
  count = 12
  valueOne = false
  var1:string = ''
  value2:string = ''
  rooms:Room = {
    totalRooms:20,
    availableRooms:0,
    bookedRooms:7
  }
  rooms2 = {
    availableRooms:0
  }

  add(){
    return 10 + 14
  }
  toggle(){
    this.valueOne = !this.valueOne
  }

  dataReceived(value:string){
    this.var1 = value
  }
  tempDataTwo(value:string){
    this.value2 = value
  }
}

interface Room{
  totalRooms:number,
  availableRooms:number,
  bookedRooms:number
}