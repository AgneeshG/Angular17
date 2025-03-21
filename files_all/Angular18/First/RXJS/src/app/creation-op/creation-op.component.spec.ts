import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationOpComponent } from './creation-op.component';

describe('CreationOpComponent', () => {
  let component: CreationOpComponent;
  let fixture: ComponentFixture<CreationOpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationOpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
