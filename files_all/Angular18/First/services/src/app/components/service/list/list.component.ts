import { Component, OnInit } from '@angular/core';
import { CarServiceSer } from '../car.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-ser',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponentSer implements OnInit{
  carListFromApp:String[] = []

  constructor(private carService:CarServiceSer){
      
  }

  ngOnInit(): void {
    this.carService.carName$.subscribe((carName:string[])=>{
      this.carListFromApp = carName
    })
  }


  

}
