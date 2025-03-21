import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OneComponent, TwoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chartJS';
}
