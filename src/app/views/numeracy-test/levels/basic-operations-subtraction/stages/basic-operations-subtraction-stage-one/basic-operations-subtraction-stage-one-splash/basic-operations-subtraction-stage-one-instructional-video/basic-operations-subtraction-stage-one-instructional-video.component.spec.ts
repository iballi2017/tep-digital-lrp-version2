import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsSubtractionStageOneInstructionalVideoComponent } from './basic-operations-subtraction-stage-one-instructional-video.component';

describe('BasicOperationsSubtractionStageOneInstructionalVideoComponent', () => {
  let component: BasicOperationsSubtractionStageOneInstructionalVideoComponent;
  let fixture: ComponentFixture<BasicOperationsSubtractionStageOneInstructionalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsSubtractionStageOneInstructionalVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicOperationsSubtractionStageOneInstructionalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
