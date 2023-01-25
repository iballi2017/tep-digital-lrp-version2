import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsSubtractionStageTwoInstructionalVideoComponent } from './basic-operations-subtraction-stage-two-instructional-video.component';

describe('BasicOperationsSubtractionStageTwoInstructionalVideoComponent', () => {
  let component: BasicOperationsSubtractionStageTwoInstructionalVideoComponent;
  let fixture: ComponentFixture<BasicOperationsSubtractionStageTwoInstructionalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsSubtractionStageTwoInstructionalVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicOperationsSubtractionStageTwoInstructionalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
