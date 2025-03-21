import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarServiceSer {

  constructor() { }
  private carNameSubj = new BehaviorSubject<string[]>([])
  carName$ = this.carNameSubj.asObservable()

  carNameFunc(carName:string){
    const curretValue = this.carNameSubj.getValue()
    const updatedNameList = [...curretValue, carName]
    this.carNameSubj.next(updatedNameList)
  }
}
