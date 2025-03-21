import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../../shared/store/counter.actions';
import { MaterialModule } from '../../Material.Module';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-counterbutton',
  standalone: true,
  imports: [ MatButtonModule, MatSlideToggleModule, MaterialModule ],
  templateUrl: './counterbutton.component.html',
  styleUrl: './counterbutton.component.css'
})
export class CounterbuttonComponent {
constructor(private store:Store<{counter:{counter:number}}>){

}
onincrement(){
  this.store.dispatch(increment())
}
ondecrement(){
  this.store.dispatch(decrement())
}
onreset(){
  this.store.dispatch(reset())
}
}
