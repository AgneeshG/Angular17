import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Temp2Component } from '../temp2/temp2.component';
import { add } from './sampleFunctions';


@Component({
  standalone: true,
  selector: 'app-temp',
  imports:[Temp2Component],
  templateUrl: './temp.component.html',
  styleUrl: './temp.component.css'
})
export class TempComponent {
  private _title = ''
  @Input({required:true, transform:add, alias:'countvalue'}) count:number = 0
  @Input({required:true}) message:string=''
  
  @Input()
  get title(){
    return this._title
  } 
  set title(value:string){
    this._title = value.trim().toUpperCase()
  }
  parentMessage:string = "Hello world from parent"
  msgFromChild:string=''

  @Output() tempEvent = new EventEmitter<string>() 
  @Output() childData = new EventEmitter<string>()
  sendData(){
    alert('helo')
    this.tempEvent.emit('first hello message from child')
    this.childData.emit('second message from child')
  }



  receiveMessage(message:string):void{
    this.msgFromChild = message
  }

}
// function   add(value:number) {
//   return value + 120
// }
