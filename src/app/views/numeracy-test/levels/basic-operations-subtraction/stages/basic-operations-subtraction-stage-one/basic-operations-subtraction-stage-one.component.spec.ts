import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsSubtractionStageOneComponent } from './basic-operations-subtraction-stage-one.component';

describe('BasicOperationsSubtractionStageOneComponent', () => {
  let component: BasicOperationsSubtractionStageOneComponent;
  let fixture: ComponentFixture<BasicOperationsSubtractionStageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsSubtractionStageOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicOperationsSubtractionStageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
