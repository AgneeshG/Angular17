import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-noContent',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './no-content.component.html',
  styleUrl: './no-content.component.css'
})
export class NoContentComponent {
  private _getsetvalue:number = 0
  setvalue = 1
  title1:boolean = false
  body1:boolean = true
  default1:boolean = true

  get func():number{
    return this._getsetvalue
  }

  set func(setvalue){
    this._getsetvalue = setvalue
  }

  getvalue(){
    if(this.setvalue<=1){
      throw new Error("value should be more than 1")
      
    }
    console.log(this.func);
    
  }
  
}

