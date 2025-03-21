import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../service/cart.service';
import { ApiService } from '../service/api.service';
import { ToastrService } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink, ToastrModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: any = []
  cartCount = 0;
  subTotal = 0;
  estTotal = 0;

  constructor(
    private cartService: CartService, 
    private apiService:ApiService, 
    private router:Router,
    private toastr:ToastrService 
  ) { }

  ngOnInit(): void {
    this.cartService.currentItem.subscribe((data: any) => {
      this.cartItems = data
    })
    this.calculateCartItems()
  }

  deleteItem(productID: string) {
    const preItem = this.cartItems.find((item: any) => item.product._id == productID)
    if (preItem) {
      const filteredItems = this.cartItems.filter((item: any) => item.product._id !== productID)
      // this.cartItems =  filteredItems
      this.cartService.updateCart(filteredItems)
    }
    this.calculateCartItems()
  }

  calculateCartItems() {
    this.cartCount = this.cartItems.length;
    this.subTotal = this.cartItems.reduce((acc: any, current: any) => {
      return acc + current.qty
    }, 0)
    this.estTotal = this.cartItems.reduce((acc: any, current: any) => {
      return acc + (current.product.price * current.qty)
    }, 0)
  }

  decreaseQty(productID: string) {
    // console.log(productID);
    const prevCartItem:any = this.cartItems.find((item: any) => item.product._id == productID )
    let qty = prevCartItem.qty
    if(qty == 1)
      return;
    qty = qty - 1;
    if(prevCartItem){
      console.log(prevCartItem);
      
      this.cartItems = this.cartItems.map((item:any)=>{
        if(item.product._id == prevCartItem.product._id){
          item.qty = qty
        }
        console.log(qty);        
        return item
      })
    }
    this.cartService.updateCart(this.cartItems)
    this.calculateCartItems()
  }

  increaseQty(productID: string) {
    // console.log(productID);
    const prevCartItem:any = this.cartItems.find((item: any) => item.product._id == productID )
    let qty = prevCartItem.qty
    if(qty == prevCartItem.product.stock ){
      this.toastr.error('Cannot increase qty! ', 'Mini Ecommerece');
      return;
    }
    qty = qty + 1;
    if(prevCartItem){
      console.log(prevCartItem);
      
      this.cartItems = this.cartItems.map((item:any)=>{
        if(item.product._id == prevCartItem.product._id){
          item.qty = qty
        }
        console.log(qty);        
        return item
      })
    }
    this.cartService.updateCart(this.cartItems)
    this.calculateCartItems()
  }

  oderComplete(){
    const order = this.cartItems
      this.apiService.orderCreate(order).subscribe((data:any)=>{
        if(data.success == true){
          const orderId =  data.order._id
          // navigate to order success
          this.router.navigate(['order','success', orderId])
          this.cartService.updateCart([])
        }
      })
  }
}
