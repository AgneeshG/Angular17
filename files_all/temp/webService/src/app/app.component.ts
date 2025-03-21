import { AfterViewInit, Component, Host, NgModule, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild,ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OneComponent } from './one/one.component';
import { ServicesService } from './_s/services.service';
import { TwoComponent } from './two/two.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './three/three.component';
import { HostDirective } from './host.directive';




@Component({  
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OneComponent, TwoComponent, CommonModule, FormsModule, ThreeComponent, FourComponent, HostDirective],
  // entryComponents:[ThreeComponent,FourComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit{
  title = 'webService';
  show = false
  @ViewChild(HostDirective, {static:true}) childRef!:HostDirective


  constructor(public tempService: ServicesService, public compFact:ComponentFactoryResolver){}

  appincrement(){
    this.tempService.count += 2
  }
  // ngOnInit() {
  //   console.log('Component Initialized')
  // }
  // ngOnDestroy(){
  //   console.log('Component Destroyed');
  // }
  toggle(){
    this.show = !this.show
  }
  // ngOnChanges(changes: SimpleChanges): void {
    // console.log('on changes triggered ',this.title, ' -- ',changes);
    // 
  // }

  ngAfterViewInit(): void {
    console.log('app - ngAfterViewInit');
  }


  showfunc(){

  }
}
