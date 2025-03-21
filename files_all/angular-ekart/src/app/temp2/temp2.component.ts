import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-temp2',
  standalone: true,
  imports: [],
  templateUrl: './temp2.component.html',
  styleUrl: './temp2.component.css'
})
export class Temp2Component {
  @Input('pMesg') fromParent:string = ""

  @Output() messageEvent = new EventEmitter<string>()
  sendMessage(){
    this.messageEvent.emit("Hello from child to parent")
  }
}
