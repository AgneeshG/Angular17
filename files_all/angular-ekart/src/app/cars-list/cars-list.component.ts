import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.css'
})
export class CarsListComponent{
 @Input('carsInput') cars:string[] = []
}
