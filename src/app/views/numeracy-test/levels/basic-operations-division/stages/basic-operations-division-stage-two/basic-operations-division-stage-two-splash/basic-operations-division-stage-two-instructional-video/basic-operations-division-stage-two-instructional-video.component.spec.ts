import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsDivisionStageTwoInstructionalVideoComponent } from './basic-operations-division-stage-two-instructional-video.component';

describe('BasicOperationsDivisionStageTwoInstructionalVideoComponent', () => {
  let component: BasicOperationsDivisionStageTwoInstructionalVideoComponent;
  let fixture: ComponentFixture<BasicOperationsDivisionStageTwoInstructionalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsDivisionStageTwoInstructionalVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicOperationsDivisionStageTwoInstructionalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
