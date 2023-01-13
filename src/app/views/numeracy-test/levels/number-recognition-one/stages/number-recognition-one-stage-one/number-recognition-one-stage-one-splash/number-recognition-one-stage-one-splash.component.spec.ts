import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberRecognitionOneStageOneSplashComponent } from './number-recognition-one-stage-one-splash.component';

describe('NumberRecognitionOneStageOneSplashComponent', () => {
  let component: NumberRecognitionOneStageOneSplashComponent;
  let fixture: ComponentFixture<NumberRecognitionOneStageOneSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberRecognitionOneStageOneSplashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberRecognitionOneStageOneSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
