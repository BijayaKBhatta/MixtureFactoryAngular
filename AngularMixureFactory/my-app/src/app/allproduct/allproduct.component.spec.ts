import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllproductComponent } from './allproduct.component';

describe('AllproductComponent', () => {
  let component: AllproductComponent;
  let fixture: ComponentFixture<AllproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});