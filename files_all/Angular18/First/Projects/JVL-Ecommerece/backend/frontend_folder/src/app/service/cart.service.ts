import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  itemSource = new BehaviorSubject([])
  currentItem = this.itemSource.asObservable()
  cartItems: any = []


  addItem(newCartItem: any) {
    const preCartItems = this.cartItems.find((element: any) => element.product._id == newCartItem.product._id)
    console.log(preCartItems);
    if (preCartItems) {
      // update item qty
      this.cartItems = this.cartItems.map((item:any)=>{
        if(item.product._id == preCartItems.product._id){
          item.qty += 1
        }
        return item
      })
    } else {
      this.cartItems.push(newCartItem)
    }
    this.itemSource.next(this.cartItems)
  }

  updateCart(items:[]){
    this.cartItems = items
    this.itemSource.next(this.cartItems)
  }


}
