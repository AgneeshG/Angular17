import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, Subscriber, fromEvent, map, tap } from 'rxjs';
import { CreationOpComponent } from './creation-op/creation-op.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreationOpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rxjs';
  button = document.body
  clickObservable = fromEvent(this.button, 'click')

  clicks = fromEvent(document, 'click')
  positions = this.clicks.pipe(
    tap(ev => console.log('hello world')),
    // map(ev => console.log(ev.clientX))
  )

  constructor(){
    this.clickObservable.subscribe(()=>{
      // console.log('Button clicked');
      
    })
    const test$ = new Observable(subscriber => {
      // console.log('test');
      subscriber.next('1')
      subscriber.next('2')
      subscriber.next('3')
      // subscriber.error('some error')
      subscriber.complete() 
      subscriber.next('4')
      setTimeout(()=> {
        subscriber.next('5'), 1000
      })
    })





    

    console.log('start');
    
    test$.subscribe( data =>{
      console.log('first : ',data);
    }, error => {
      console.log('error', error);
    }, () => {
      console.log('first complete');
    })
    console.log('between');

    test$.subscribe(data =>{
      console.log('second', data);
    })
    console.log('end');

  // this.positions.subscribe(x => console.log(x))
  }

}
