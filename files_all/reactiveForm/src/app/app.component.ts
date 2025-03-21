import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormOneComponent } from './form-one/form-one.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormOneComponent, ReactiveFormsModule, FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactiveForm';
}
