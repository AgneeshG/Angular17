import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { custObservable } from './custObservable';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'observable';
  constructor(){
    const cust$ = new custObservable(sub =>{
      console.log('custom observable');
      sub.next('one')
      sub.next('two')
      
    })
    cust$.subscribe(x=>{
      console.log('1 ',x);
    });
    cust$.subscribe(x=>{
      console.log('2 ', x);
    });


    const test$ = new Observable(Subscriber => {
      console.log('test')
      Subscriber.next('1')
      Subscriber.next('2')
      Subscriber.next('3')
      Subscriber.complete()
      Subscriber.error('error accoured')  
      setTimeout(() => {
        Subscriber.next('4')
      }, 2000);
    })
    test$.subscribe(x =>{
      console.log('1st', x)
    },error=>{
      console.log('Error',error);  
    });
  
    test$.subscribe(x=>{
      console.log('2nd', x);
    })

  }

  func(){
    console.log('test function');
    console.log('test one');
    setTimeout(() => {
      console.log('test two');
    }, 2000);
    console.log('test three');
    setTimeout(() => {
      console.log('test four');
    }, 2000);
  }  
  
}
