import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OneComponent } from './components/one/one.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signals';
}
