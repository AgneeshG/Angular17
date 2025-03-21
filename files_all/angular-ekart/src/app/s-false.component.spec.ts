import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SFalseComponent } from './s-false.component';

describe('SFalseComponent', () => {
  let component: SFalseComponent;
  let fixture: ComponentFixture<SFalseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SFalseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SFalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
