import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  count = 5
  constructor() { }

  add(){
    return this.count += 7
  }


}
