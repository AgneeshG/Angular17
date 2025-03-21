import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  productsTemp:any = []
  constructor(private http:HttpClient) { }

  productSource = new BehaviorSubject([])
  currentProducts = this.productSource.asObservable()

  getProducts(){
    this.http.get('http://localhost:8000/api/v1/products').subscribe((data:any)=>{
      this.productSource.next(data)
      this.productsTemp = data
    })
  }

  searchProduct(searchText:string){
    return this.http.get('http://localhost:8000/api/v1/products',{
      params:{keyword:searchText}
    }).subscribe((data:any)=>{
      this.productSource.next(data)
    })
  }

  clearSearch(searchText:string){
    if(searchText == ''){
      this.productSource.next(this.productsTemp)
    }
  }

  productPage(productId:string){
    return this.http.get(`http://localhost:8000/api/v1/product/`+productId)
  }

  orderCreate(order:any){
    return this.http.post('http://localhost:8000/api/v1/order', order)
  }

}
