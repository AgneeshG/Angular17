import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Customers } from '../models/customers';

@Component({
  selector: 'app-customer-add',
  standalone: true,
  imports: [],
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.css'
})
export class CustomerAddComponent implements OnInit{
  customers:Customers[] = []

  @Output() customerAdded = new EventEmitter<Customers[]>
  constructor(){
  }

  ngOnInit(): void {
  }


  addCustomer(customer_name: string){
    let customer:Customers = {name:customer_name}
    this.customers.push(customer)
    this.customerAdded.emit(this.customers)
    console.log(this.customers);
    
    

  }
}
