import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberRecognitionOneStageOneInstructionalVideoComponent } from './number-recognition-one-stage-one-instructional-video.component';

describe('NumberRecognitionOneStageOneInstructionalVideoComponent', () => {
  let component: NumberRecognitionOneStageOneInstructionalVideoComponent;
  let fixture: ComponentFixture<NumberRecognitionOneStageOneInstructionalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberRecognitionOneStageOneInstructionalVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberRecognitionOneStageOneInstructionalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
