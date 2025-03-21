import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ApiService } from './service/api.service';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'frontend';
  searchText:string = ''
  cartCount:number = 0

  constructor(private apiService:ApiService, private cartService:CartService){}

  ngOnInit(): void {
    this.cartService.currentItem.subscribe((data)=>{
      this.cartCount = data.length;
    })
  }

  search(){
    this.apiService.searchProduct(this.searchText);   
  }

  clearSearch(){
    this.apiService.clearSearch(this.searchText)      
  }

  searchByEnterKey(){
    this.search()
  }


}
