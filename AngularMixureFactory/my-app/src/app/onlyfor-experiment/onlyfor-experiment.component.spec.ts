import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyforExperimentComponent } from './onlyfor-experiment.component';

describe('OnlyforExperimentComponent', () => {
  let component: OnlyforExperimentComponent;
  let fixture: ComponentFixture<OnlyforExperimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlyforExperimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyforExperimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
