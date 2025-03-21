import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getCategory(){
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORY)
  }
  saveProduct(obj:any){
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.CREATE_PRODUCT, obj)
  }
  getAllProduct(){
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCT)
  }
  updateProduct(obj:any){
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.UPDATE_PRODUCT, obj)
  }
  deleteProduct(id:any){
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.DELETE_PRODUCT_BY_ID + id)
  }
  getProductByid(id:number){
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_PRODUCTS_BY_ID + id)
  }
  addToCart(obj:any){
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.ADD_TO_CART, obj)
  }
  getCartDataByCustId(custId:any){
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_CART_BY_CUST_ID + custId)  
  }
}
