import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css'
})
export class CategoryProductsComponent implements OnInit{
  activateCategoryId:number = 0
  productsByIdList:any[] = []
  totalProductsByCategory:number = 0
  constructor(private activatedRoute:ActivatedRoute, private proServ:ProductService){ 
    this.activatedRoute.params.subscribe((res:any)=>{
      debugger;
      this.activateCategoryId = res.id;
      this.getProductById()

    })
  }

  ngOnInit(): void {

  }

  getProductById(){
    this.proServ.getProductByid(this.activateCategoryId).subscribe((res:any)=>{
      this.productsByIdList = res.data
      
    })
  }
   getTotalProd(){
    this.totalProductsByCategory++
   }
}
