import { Injectable } from '@angular/core';
import { Customers } from '../models/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  customer:Customers[] = []
  constructor() { }

  add(customer_name:string){
    const customer = new Customers()
    customer.name = customer_name
    this.customer.push(customer)
  }

  get(){
    return this.customer
  }
}
