import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberRecognitionTwoStageOneInstructionalVideoComponent } from './number-recognition-two-stage-one-instructional-video.component';

describe('NumberRecognitionTwoStageOneInstructionalVideoComponent', () => {
  let component: NumberRecognitionTwoStageOneInstructionalVideoComponent;
  let fixture: ComponentFixture<NumberRecognitionTwoStageOneInstructionalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberRecognitionTwoStageOneInstructionalVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberRecognitionTwoStageOneInstructionalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
