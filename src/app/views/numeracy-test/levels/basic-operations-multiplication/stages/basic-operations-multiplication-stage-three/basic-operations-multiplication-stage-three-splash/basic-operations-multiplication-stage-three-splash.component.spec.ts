import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsMultiplicationStageThreeSplashComponent } from './basic-operations-multiplication-stage-three-splash.component';

describe('BasicOperationsMultiplicationStageThreeSplashComponent', () => {
  let component: BasicOperationsMultiplicationStageThreeSplashComponent;
  let fixture: ComponentFixture<BasicOperationsMultiplicationStageThreeSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsMultiplicationStageThreeSplashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicOperationsMultiplicationStageThreeSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
