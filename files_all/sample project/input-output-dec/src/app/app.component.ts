import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { Customers } from './models/customers';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomerAddComponent, CustomerViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'input-output-dec';

  customer:Customers[] = []

  getCustomers(customers:Customers[]){
    this.customer = customers
  }
}
