import { Component, Input } from '@angular/core';
import { Customers } from '../models/customers';

@Component({
  selector: 'app-customer-view',
  standalone: true,
  imports: [],
  templateUrl: './customer-view.component.html',
  styleUrl: './customer-view.component.css'
})
export class CustomerViewComponent {
  
  @Input() customers: Customers[] =[]
}
