import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FormsModule
  ],
  bootstrap: []
})
export class ModuleModule { }
