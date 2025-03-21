import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarService } from '../service/car.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  carList:string[] = ["Ford", "Toyoto"]

  constructor(private carService:CarService){

  }
  ngOnInit(): void {
    
  }


}
