import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamCalendarComponent } from './sam-calendar.component';

describe('SamCalendarComponent', () => {
  let component: SamCalendarComponent;
  let fixture: ComponentFixture<SamCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SamCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SamCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
