import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { FormComponentInOut } from './components/input_output/form/form.component';
import { ListComponentInOut } from './components/input_output/list/list.component';
import { FormComponentSer } from './components/service/form/form.component';
import { ListComponentSer } from './components/service/list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, ListComponent, FormComponentInOut, ListComponentInOut,FormComponentSer, ListComponentSer],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'services';
  carNameList:String[] = []

  getCarList(carName:string){
    this.carNameList.push(carName)
    
  }

  // observable
  
}
