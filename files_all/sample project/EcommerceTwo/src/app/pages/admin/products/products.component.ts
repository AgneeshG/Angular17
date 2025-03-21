import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css', 
})
export class ProductsComponent implements OnInit{
  isSidePanelVisible:boolean = false
  totalProducts:number = 0

  productObj:any = {
      "productId": 0,
      "productSku": "",
      "productName": "",
      "productPrice": 0,
      "productShortName": "",
      "productDescription": "",
      "createdDate": new Date(),
      "deliveryTimeSpan": "",
      "categoryId": 0,
      "porductImageUrl": ""
  }

  categoryList:any[] = []
  productList:any[] = []
  constructor(private productSer: ProductService){

  }

  ngOnInit(): void {
     this.getAllCategory() 
     this.getAllProducts() 
     this.totalProductsCount()
  }
  
  totalProductsCount(){
    for(let product in this.productList){
      this.totalProducts++
    }
  }

  getAllProducts(){
    this.productSer.getAllProduct().subscribe((res:any)=>{
      this.productList = res.data;
    })
  }

  getAllCategory(){
    this.productSer.getCategory().subscribe((res:any)=>{
      this.categoryList = res.data;
    })
  }

  onSave(){
    this.productSer.saveProduct(this.productObj).subscribe((res:any)=>{
      debugger;
      if(res.result){
        alert("Product Created")
        this.getAllProducts()
      } else {
        alert(res.message)
      }
    })
  }

  onUpdate(){
    this.productSer.saveProduct(this.productObj).subscribe((res:any)=>{
      debugger;
      if(res.result){
        alert("Product Updated")
        this.getAllProducts()
      } else {
        alert(res.Message)
      }
    })
  }

  onEdit(item:any){
    this.productObj = item
    this.isSidePanelVisible = true
  }

  onDelete(item:any){
    const isDelete = confirm('Are you sure want to delete')
    if(isDelete){
      this.productSer.deleteProduct(item.productId).subscribe((res:any)=>{
        alert(res.result)
        debugger;
        if(res.result){
          alert("Product Deleted")
          this.getAllProducts()
        } else {
          alert(res.Message)
        } 
      })
    }
  }

}
