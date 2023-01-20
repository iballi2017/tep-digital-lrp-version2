import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberRecognitionThreeStageOneComponent } from './number-recognition-three-stage-one.component';

describe('NumberRecognitionThreeStageOneComponent', () => {
  let component: NumberRecognitionThreeStageOneComponent;
  let fixture: ComponentFixture<NumberRecognitionThreeStageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberRecognitionThreeStageOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberRecognitionThreeStageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
