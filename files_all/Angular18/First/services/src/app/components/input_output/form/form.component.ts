import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-inout',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponentInOut {
  carName:string = ''
  @Output() carNameToApp = new EventEmitter<string>()
  onSubmit(carName:string){ 
    console.log('Car name : ', carName);
    this.carNameToApp.emit(carName) 
    this.carName = ""
  }
}
