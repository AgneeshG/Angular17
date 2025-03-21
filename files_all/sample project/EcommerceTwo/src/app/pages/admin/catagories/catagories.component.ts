import { Component } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { Observable, map, retry } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catagories', 
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catagories.component.html',
  styleUrl: './catagories.component.css'
})
export class CatagoriesComponent {


  products$:Observable<any>;
  constructor(private productSrv:ProductService){
    this.products$ = this.productSrv.getCategory().pipe(
      map((item:any)=>{
        return item.data
      })
    );
  }

  getAllCategory(){

  }
}
