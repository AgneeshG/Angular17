import { Component } from '@angular/core';
import { CarService } from '../../../service/car.service';
import { FormsModule } from '@angular/forms';
import { CarServiceSer } from '../car.service';

@Component({
  selector: 'app-form-ser',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponentSer {
  carName:string = ''

  constructor(private carService:CarServiceSer){
  }

  sendCarName(carName:string){
    this.carService.carNameFunc(carName)
    console.log(carName, 'form');
    this.carName = ''
    
  }

}
