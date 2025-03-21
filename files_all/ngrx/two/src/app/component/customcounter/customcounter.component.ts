import { Component } from '@angular/core';
import { MaterialModule } from '../../Material.Module';
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from "@angular/material/form-field"
import { Store } from '@ngrx/store';
import { customincrement } from '../../shared/store/counter.actions';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-customcounter',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MaterialModule, FormsModule],
  templateUrl: './customcounter.component.html',
  styleUrl: './customcounter.component.css'
})
export class CustomcounterComponent { 
  constructor(private store:Store<{counter:{counter:number}}>){

  } 
  counterinput!:number
  Onincrement(){
    this.store.dispatch(customincrement({value : +this.counterinput}));
  }
}
