import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberRecognitionOneStageOneComponent } from './number-recognition-one-stage-one.component';

describe('NumberRecognitionOneStageOneComponent', () => {
  let component: NumberRecognitionOneStageOneComponent;
  let fixture: ComponentFixture<NumberRecognitionOneStageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberRecognitionOneStageOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberRecognitionOneStageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
