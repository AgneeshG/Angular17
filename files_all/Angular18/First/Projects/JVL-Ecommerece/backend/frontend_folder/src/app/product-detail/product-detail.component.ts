import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
import { FormsModule } from '@angular/forms';
import { CartService } from '../service/cart.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrService } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, ToastrModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  product:any = null
  qty:number = 1
  

  constructor(private route:ActivatedRoute, 
    private apiService:ApiService, 
    private cartService:CartService,
    private toastr:ToastrService 
  ){}

  ngOnInit(): void {
    this.route.params.subscribe((data)=>{
      const id:string = data['id']
      this.apiService.productPage(id).subscribe((data:any)=>{
        // console.log(data, 'DATA');
        this.product = data.product
      })
    })
  }

  increaseQty(){
    if(this.qty == this.product.stock)
      return
    this.qty += 1
  }

  decreaseQty(){
    if(this.qty == 1)
      return
    this.qty -= 1
  }


  addToCart(){
    const newCartItem = {
      product : this.product,
      qty : this.qty
    }
    // console.log(newCartItem);
    if(this.product.stock == 0){
      this.toastr.error('Cannot add item. due to out of stock', 'Mini Ecommerece');

      return
    }

    // add item to cart
    this.cartService.addItem(newCartItem)
    this.toastr.success('Item added to cart!', 'Mini Ecommerece');
  }
}
