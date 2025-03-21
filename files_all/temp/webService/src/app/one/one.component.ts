import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ServicesService } from '../_s/services.service';
import { Injectable } from '@angular/core';

// @Injectable()
@Component({
  selector: 'app-one',
  standalone: true,
  imports: [],
  templateUrl: './one.component.html',
  styleUrl: './one.component.css',
  providers:[ServicesService]

})
export class OneComponent implements OnChanges, OnInit, OnDestroy{
  value:number = 0
  constructor(public tempService: ServicesService){

  }
  addition(){
    // this.value = this.tempService.count++
    this.value = this.tempService.add()
  }

  sub(){
    return this.tempService.count--
  }
  ngOnInit() {
    console.log('Component Initialized one')
  }
  // ngOnDestroy(){
  //   console.log('Component Destroyed');
  // }
// 
  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes triggered one ','- -- ',changes);
  }

  ngOnDestroy(){
    console.log('Component Destroyed one');
    console.log(this.value);
    
  }
  ngDoCheck(): void {
    console.log('child ngDoCheck');
  }
  ngAfterViewInit(): void {
    console.log('child - ngAfterViewInit');
  }
}
