import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit{
  productList:any[] = []
  categoryList:any[] = []
  cartItems:any[] = []
  cartTotalValue:number = 0
  totalProductsInCart:number = 0
  constructor(private prodSer: ProductService, private router:Router){

  }

  ngOnInit(): void {
    this.getProducts()
    this.getAllCategory()
    this.getCartItems()
  }

  getProducts(){
    this.prodSer.getAllProduct().subscribe((res:any)=>{
      this.productList = res.data;
    })
  }

  getAllCategory(){
    this.prodSer.getCategory().subscribe((res:any)=>{
      this.categoryList = res.data
    })
  }

  categoryProducts(id:number){
    this.router.navigate(['/categoryproducts',id])
  }

  getCartItems(){
    this.prodSer.getCartDataByCustId(379).subscribe((res:any)=>{
      // debugger;
      this.cartItems = res.data
      if(res.result){
        alert("product added to cart")
      } else {
        alert(res.message)
      }
    })
  }

  gettotalCartValue(productAmt:number){
    this.cartTotalValue = this.cartTotalValue + productAmt
  }
  getCartCount(){
    this.totalProductsInCart++
  }
}
