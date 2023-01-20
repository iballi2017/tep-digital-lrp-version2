import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberRecognitionThreeStageOneSplashComponent } from './number-recognition-three-stage-one-splash.component';

describe('NumberRecognitionThreeStageOneSplashComponent', () => {
  let component: NumberRecognitionThreeStageOneSplashComponent;
  let fixture: ComponentFixture<NumberRecognitionThreeStageOneSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberRecognitionThreeStageOneSplashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberRecognitionThreeStageOneSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
