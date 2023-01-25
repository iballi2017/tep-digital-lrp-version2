import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsAdditionStageOneInstructionalVideoComponent } from './basic-operations-addition-stage-one-instructional-video.component';

describe('BasicOperationsAdditionStageOneInstructionalVideoComponent', () => {
  let component: BasicOperationsAdditionStageOneInstructionalVideoComponent;
  let fixture: ComponentFixture<BasicOperationsAdditionStageOneInstructionalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsAdditionStageOneInstructionalVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicOperationsAdditionStageOneInstructionalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
