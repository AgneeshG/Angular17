import { Component,signal,effect,computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { cpuUsage } from 'process';

@Component({
  selector: 'app-one',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent {
  count = signal(0)
  color = computed(()=> this.countColor(this.count()))
  showDetails = signal(false)

  constructor(){
    effect(()=>{
      console.log('count changed to :', this.count());
    })
    effect(()=>{
      const currentCount = this.count();
      if(currentCount>5){
        console.warn('Count is greater than 5!');
      } else if(currentCount<-5) {
        console.warn('Count is less than -5!');
      }
    })
  }

  increment(){
    this.count.update(value => value + 1)
  }

  decrement(){
    this.count.update(value => value - 1)
  }
 
  countColor(count:number):string{
    if(count>2) return '#38fc55';
    if(count<0) return 'red';
    return 'black';
  }
}
