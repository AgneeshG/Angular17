import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Temp2Component } from './temp2.component';

describe('Temp2Component', () => {
  let component: Temp2Component;
  let fixture: ComponentFixture<Temp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Temp2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Temp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
