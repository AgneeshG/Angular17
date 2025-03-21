import { Component,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Element } from '@angular/compiler';
import { log } from 'console';
import { ListComponent } from '../list/list.component';




@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ListComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  color = 'yellow';
  cars:string[] = [];
  carName = "";
  addCar(){
    this.cars.push(this.carName)
    this.carName=''
    console.log(this.cars);
    
  }
  


}
