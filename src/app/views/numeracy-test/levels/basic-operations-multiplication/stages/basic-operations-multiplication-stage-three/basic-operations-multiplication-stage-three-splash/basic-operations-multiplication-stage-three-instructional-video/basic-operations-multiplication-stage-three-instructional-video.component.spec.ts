import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsMultiplicationStageThreeInstructionalVideoComponent } from './basic-operations-multiplication-stage-three-instructional-video.component';

describe('BasicOperationsMultiplicationStageThreeInstructionalVideoComponent', () => {
  let component: BasicOperationsMultiplicationStageThreeInstructionalVideoComponent;
  let fixture: ComponentFixture<BasicOperationsMultiplicationStageThreeInstructionalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsMultiplicationStageThreeInstructionalVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicOperationsMultiplicationStageThreeInstructionalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
