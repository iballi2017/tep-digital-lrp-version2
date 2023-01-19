import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberRecognitionTwoStageOneSplashComponent } from './number-recognition-two-stage-one-splash.component';

describe('NumberRecognitionTwoStageOneSplashComponent', () => {
  let component: NumberRecognitionTwoStageOneSplashComponent;
  let fixture: ComponentFixture<NumberRecognitionTwoStageOneSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberRecognitionTwoStageOneSplashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberRecognitionTwoStageOneSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
