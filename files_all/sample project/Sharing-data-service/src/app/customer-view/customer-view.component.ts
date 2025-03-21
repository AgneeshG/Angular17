import { Component, Input, OnInit } from '@angular/core';
import { Customers } from '../models/customers';
import { CustomersService } from '../_service/customers.service';

@Component({
  selector: 'app-customer-view',
  standalone: true,
  imports: [],
  templateUrl: './customer-view.component.html',
  styleUrl: './customer-view.component.css'
})
export class CustomerViewComponent implements OnInit {

  constructor(private customerservice: CustomersService){

  }
customers: Customers[] =[]

ngOnInit(): void {
  this.customers = this.customerservice.get()
}


}
