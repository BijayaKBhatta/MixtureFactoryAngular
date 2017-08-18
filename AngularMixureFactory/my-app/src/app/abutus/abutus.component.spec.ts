import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbutusComponent } from './abutus.component';

describe('AbutusComponent', () => {
  let component: AbutusComponent;
  let fixture: ComponentFixture<AbutusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbutusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
