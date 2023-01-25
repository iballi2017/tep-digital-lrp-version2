import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsMultiplicationStageOneInstructionalVideoComponent } from './basic-operations-multiplication-stage-one-instructional-video.component';

describe('BasicOperationsMultiplicationStageOneInstructionalVideoComponent', () => {
  let component: BasicOperationsMultiplicationStageOneInstructionalVideoComponent;
  let fixture: ComponentFixture<BasicOperationsMultiplicationStageOneInstructionalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsMultiplicationStageOneInstructionalVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicOperationsMultiplicationStageOneInstructionalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
