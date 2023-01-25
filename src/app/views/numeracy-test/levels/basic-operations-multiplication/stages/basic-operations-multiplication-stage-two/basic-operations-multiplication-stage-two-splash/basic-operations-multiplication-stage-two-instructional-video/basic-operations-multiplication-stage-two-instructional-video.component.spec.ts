import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsMultiplicationStageTwoInstructionalVideoComponent } from './basic-operations-multiplication-stage-two-instructional-video.component';

describe('BasicOperationsMultiplicationStageTwoInstructionalVideoComponent', () => {
  let component: BasicOperationsMultiplicationStageTwoInstructionalVideoComponent;
  let fixture: ComponentFixture<BasicOperationsMultiplicationStageTwoInstructionalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsMultiplicationStageTwoInstructionalVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicOperationsMultiplicationStageTwoInstructionalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
