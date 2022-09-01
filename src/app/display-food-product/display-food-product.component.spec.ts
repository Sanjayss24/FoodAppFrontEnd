import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFoodProductComponent } from './display-food-product.component';

describe('DisplayFoodProductComponent', () => {
  let component: DisplayFoodProductComponent;
  let fixture: ComponentFixture<DisplayFoodProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFoodProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFoodProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
