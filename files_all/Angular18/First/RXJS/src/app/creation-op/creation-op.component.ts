import { Component, OnInit } from '@angular/core';
import { combineLatest, from, fromEvent, map, timer, concat, forkJoin, merge, race, of, zip, bufferTime } from 'rxjs';
import { take } from 'rxjs';

@Component({
  selector: 'app-creation-op',
  standalone: true,
  imports: [],
  templateUrl: './creation-op.component.html',
  styleUrl: './creation-op.component.css'
})
export class CreationOpComponent implements OnInit{
  data1 = from([5,6,7,8,9])
  data2 = from([1,2,3,4]).pipe(take(2))

  constructor(){
    this.data1.subscribe(x => console.log(x))

    // join creation operator - combineLatest, concat, forkJoin
    const firstTimer = timer(0, 1000).pipe(take(10), map(x=> x+10))
    const secondTimer = timer(0, 3000).pipe(take(10),map(x=> x+100))
    const combineTimers = combineLatest(firstTimer, secondTimer)
    const dataOne = concat(firstTimer, secondTimer)
    const dataTwo = forkJoin(firstTimer, secondTimer)
    const dataThree = merge(firstTimer, secondTimer)
    const dataFour = race(firstTimer, secondTimer)

    let age$ = of(24, 31, 25);
    let name$ = of('jack', 'dany', 'alex')
    let isDev$ = of(true, true, false)
    
    // console.log("combineLatest");
    // combineTimers.subscribe(value => {
    //   console.log(value);
    // })

    // console.log("\nconcat");
    // dataOne.subscribe(value => {
    //   console.log(value);
    // })

    // console.log("\nforkJoin");
    // dataTwo.subscribe(value =>{
    //   console.log(value);
    // })

    // console.log("\nmerge");
    // dataThree.subscribe( value =>{
    //   console.log(value);
    // })

    // console.log("\nrace");
    // dataFour.subscribe( value =>{
    //   console.log(value);
    // })

    // zip(age$, name$, isDev$).pipe(map(([age, name, isDev]) =>({
    //   age, name, isDev
    // }))).subscribe(x => console.log(x)
    // )

    zip(age$, name$, isDev$, (x, y, z)=>{
      console.log('test',x);
      return {x, y, z}
    }).subscribe(x => console.log(x)
    )

    const clicks = fromEvent(document, 'click')
    const buffered =  clicks.pipe(bufferTime(1000), take(10))
    buffered.subscribe(x => console.log(x))
  }





  ngOnInit(): void {
    const event1 = document.getElementById("test")!
    const data3 = fromEvent(event1, "click").pipe(take(10))
    data3.subscribe(n => {
      console.log('p tag clicked');      
    })
  }
}
