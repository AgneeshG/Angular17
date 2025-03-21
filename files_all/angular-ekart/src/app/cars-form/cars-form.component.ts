import { Component } from '@angular/core';
import { CarsListComponent } from '../cars-list/cars-list.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cars-form',
  standalone: true,
  imports: [CarsListComponent, FormsModule, CommonModule],
  templateUrl: './cars-form.component.html',
  styleUrl: './cars-form.component.css'
})
export class CarsFormComponent {
  carName: string = ""
  carsList: string[] = []
  addCar(){
    this.carsList.push(this.carName)
    this.carName = ""
    console.log(this.carsList);
    
  }
}
