import { Component, OnInit } from '@angular/core';
import { Customers } from '../models/customers';
import { CustomersService } from '../_service/customers.service';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit {
  customers: Customers[] =[]
  constructor(private customerservice: CustomersService){ }

  ngOnInit(): void {
    this.customers = this.customerservice.get()
  }
}
