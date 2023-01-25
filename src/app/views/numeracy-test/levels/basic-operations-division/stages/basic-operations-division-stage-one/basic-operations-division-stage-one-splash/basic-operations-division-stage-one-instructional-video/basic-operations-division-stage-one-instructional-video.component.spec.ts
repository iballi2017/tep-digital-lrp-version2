import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsDivisionStageOneInstructionalVideoComponent } from './basic-operations-division-stage-one-instructional-video.component';

describe('BasicOperationsDivisionStageOneInstructionalVideoComponent', () => {
  let component: BasicOperationsDivisionStageOneInstructionalVideoComponent;
  let fixture: ComponentFixture<BasicOperationsDivisionStageOneInstructionalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsDivisionStageOneInstructionalVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicOperationsDivisionStageOneInstructionalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
