import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Customers } from '../models/customers';
import { CustomersService } from '../_service/customers.service';

@Component({
  selector: 'app-customer-add',
  standalone: true,
  imports: [],
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.css'
})
export class CustomerAddComponent implements OnInit{

  constructor(private customerservice:CustomersService) { }

  
  ngOnInit(): void {
  }


  addCustomer(customer_name: string){
    this.customerservice.add(customer_name)
  }
}
