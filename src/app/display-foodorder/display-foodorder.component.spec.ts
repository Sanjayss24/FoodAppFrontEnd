import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFoodorderComponent } from './display-foodorder.component';

describe('DisplayFoodorderComponent', () => {
  let component: DisplayFoodorderComponent;
  let fixture: ComponentFixture<DisplayFoodorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFoodorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFoodorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
