import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormOneComponent } from './form-one/form-one.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormOneComponent, FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms';
}
