import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../shared/store/counter.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({counter:counterReducer}),

  ]
})
export class ModulefileModule { 
}
