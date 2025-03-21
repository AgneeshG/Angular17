import { Component } from '@angular/core';
import { Route, RouterLink } from '@angular/router';
import { ProductService } from '../../../services/product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './web-products.component.html',
  styleUrl: './web-products.component.css'
})
export class WebProductsComponent {
  productList:any[] = []
  categoryList:any[] = []
  constructor(private prodSer:ProductService, private router:Router){

  }
  ngOnInit(): void {
    this.getProducts()
    this.getAllCategory()
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

  addToCart(productId:number){
    const addtocartObj={
        "CartId": 0,
        "CustId": 379,
        "ProductId": productId,
        "Quantity": 2,
        "AddedDate": new Date()
    }
    alert(productId)
    this.prodSer.addToCart(addtocartObj).subscribe((res:any)=>{
      debugger;
      if(res.result){
        alert("Product added to cart")
      } else {
        alert(res.message);
      }
    })
  }
}
