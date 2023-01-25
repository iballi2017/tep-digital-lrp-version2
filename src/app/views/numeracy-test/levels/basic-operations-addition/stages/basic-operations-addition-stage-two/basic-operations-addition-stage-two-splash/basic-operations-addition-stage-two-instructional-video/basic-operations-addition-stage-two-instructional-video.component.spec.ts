import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsAdditionStageTwoInstructionalVideoComponent } from './basic-operations-addition-stage-two-instructional-video.component';

describe('BasicOperationsAdditionStageTwoInstructionalVideoComponent', () => {
  let component: BasicOperationsAdditionStageTwoInstructionalVideoComponent;
  let fixture: ComponentFixture<BasicOperationsAdditionStageTwoInstructionalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsAdditionStageTwoInstructionalVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicOperationsAdditionStageTwoInstructionalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
