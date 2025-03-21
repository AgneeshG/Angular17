import { Component, OnDestroy, OnInit, Input, OnChanges, SimpleChanges, DoCheck, ViewChild, AfterViewChecked } from '@angular/core';
import { ServicesService } from '../_s/services.service';
import { NgModule } from '@angular/core';
import { OneComponent } from '../one/one.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two',
  standalone: true,
  imports: [OneComponent, CommonModule, FormsModule, OneComponent],
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})


export class TwoComponent implements OnChanges, OnInit, OnDestroy, DoCheck, AfterViewChecked{ 
  
  constructor(public tempService:ServicesService){}
  value:number = this.tempService.count
  show = false
  @Input('refVar') refvar:string='';

  @ViewChild(OneComponent,{static:false}) viewChild!:OneComponent;

  toggle(){
    this.show = !this.show
  }

  add(){
  return this.tempService.count -= 2
  }

  tempVar(One:any, tempdiv:unknown){
    console.log(One,tempdiv)
    return One
  }

  ngOnInit() {
    console.log('Component Initialized two',this.viewChild)
  }
  // ngOnDestroy(){
  //   console.log('Component Destroyed');
  // }
// 
  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes triggered ',this.refvar, '- -- ',changes, this.viewChild);    
  }

  ngOnDestroy(){
    console.log('Component Destroyed two');
  }
  
  ngDoCheck(): void {
    console.log('parent ngDoCheck');
  }
  ngAfterViewInit(): void {
    console.log('parent - ngAfterViewInit', this.viewChild);
    this.refvar =  'web service two.component'
    this.viewChild.value = 23
  }
  ngAfterViewChecked(): void {
    console.log('parent ngAfterViewChecked');
    
  }
}





// 

