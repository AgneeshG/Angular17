import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  carListArr:string[] = []
  constructor() { }

  private carNameSubject = new BehaviorSubject<string[]>([])
  carsList$ = this.carNameSubject.asObservable()

  carNameToList(carName:string){
    const currentNames = this.carNameSubject.getValue()
    const updatedNames = [carName, ...currentNames]
    this.carNameSubject.next(updatedNames)
  }
}
