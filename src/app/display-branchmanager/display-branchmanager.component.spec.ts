import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBranchmanagerComponent } from './display-branchmanager.component';

describe('DisplayBranchmanagerComponent', () => {
  let component: DisplayBranchmanagerComponent;
  let fixture: ComponentFixture<DisplayBranchmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayBranchmanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBranchmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
