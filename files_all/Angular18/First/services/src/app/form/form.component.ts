import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarService } from '../service/car.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  carName:string = ""

  constructor(private carService:CarService){

  }

  onSubmit(){
    console.log(`Car name in form page : ${this.carName}`);
    this.carService.carNameToList(this.carName)
    this.carName = ""
  }
  ngOnInit(): void {
  }
}
