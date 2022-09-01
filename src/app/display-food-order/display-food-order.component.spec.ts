import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFoodOrderComponent } from './display-food-order.component';

describe('DisplayFoodOrderComponent', () => {
  let component: DisplayFoodOrderComponent;
  let fixture: ComponentFixture<DisplayFoodOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFoodOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFoodOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
