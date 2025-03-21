import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
export class HeadingComponent implements OnChanges, OnInit{
  @Input('headingInput') textOne=""
  ngOnChanges(changes: SimpleChanges): void {
    // if(!changes['textOne'].isFirstChange()){
      // console.log("You are modifying the original value");
      console.log("ngOnChanges called", changes['textOne'].currentValue);       
    // }
  }
  ngOnInit(): void {
    console.log("ngOnInit Called!");
    this.textOne="Sample text"
  }
}
