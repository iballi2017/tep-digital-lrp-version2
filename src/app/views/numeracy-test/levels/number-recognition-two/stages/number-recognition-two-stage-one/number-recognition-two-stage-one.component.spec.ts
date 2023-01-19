import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberRecognitionTwoStageOneComponent } from './number-recognition-two-stage-one.component';

describe('NumberRecognitionTwoStageOneComponent', () => {
  let component: NumberRecognitionTwoStageOneComponent;
  let fixture: ComponentFixture<NumberRecognitionTwoStageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberRecognitionTwoStageOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberRecognitionTwoStageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
