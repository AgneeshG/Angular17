import { Component, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { HeadingComponent } from './heading/heading.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent, FormComponent, HeadingComponent, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'form_and_list'; 
  title2 = "Angular"
}

@NgModule({
  declarations: [],
  imports: [],
  schemas: [NO_ERRORS_SCHEMA] // Add NO_ERRORS_SCHEMA here
})

export class AppModule {}

