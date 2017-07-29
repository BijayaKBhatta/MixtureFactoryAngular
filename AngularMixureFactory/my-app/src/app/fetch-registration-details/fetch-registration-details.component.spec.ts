import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchRegistrationDetailsComponent } from './fetch-registration-details.component';

describe('FetchRegistrationDetailsComponent', () => {
  let component: FetchRegistrationDetailsComponent;
  let fixture: ComponentFixture<FetchRegistrationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchRegistrationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchRegistrationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
