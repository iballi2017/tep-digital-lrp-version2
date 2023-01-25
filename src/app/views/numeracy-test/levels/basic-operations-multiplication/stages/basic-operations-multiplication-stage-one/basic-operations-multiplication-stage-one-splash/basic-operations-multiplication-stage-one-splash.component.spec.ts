import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsMultiplicationStageOneSplashComponent } from './basic-operations-multiplication-stage-one-splash.component';

describe('BasicOperationsMultiplicationStageOneSplashComponent', () => {
  let component: BasicOperationsMultiplicationStageOneSplashComponent;
  let fixture: ComponentFixture<BasicOperationsMultiplicationStageOneSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsMultiplicationStageOneSplashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicOperationsMultiplicationStageOneSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
