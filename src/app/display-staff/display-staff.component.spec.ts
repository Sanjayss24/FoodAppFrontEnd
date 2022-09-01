import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayStaffComponent } from './display-staff.component';

describe('DisplayStaffComponent', () => {
  let component: DisplayStaffComponent;
  let fixture: ComponentFixture<DisplayStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
