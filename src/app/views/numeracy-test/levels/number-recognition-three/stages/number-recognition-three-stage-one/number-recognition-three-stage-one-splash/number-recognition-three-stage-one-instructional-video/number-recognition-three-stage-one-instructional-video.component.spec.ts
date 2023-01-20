import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberRecognitionThreeStageOneInstructionalVideoComponent } from './number-recognition-three-stage-one-instructional-video.component';

describe('NumberRecognitionThreeStageOneInstructionalVideoComponent', () => {
  let component: NumberRecognitionThreeStageOneInstructionalVideoComponent;
  let fixture: ComponentFixture<NumberRecognitionThreeStageOneInstructionalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberRecognitionThreeStageOneInstructionalVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberRecognitionThreeStageOneInstructionalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
