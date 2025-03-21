import { TestBed } from '@angular/core/testing';

import { CarServiceSer } from './car.service';

describe('CarService', () => {
  let service: CarServiceSer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarServiceSer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
