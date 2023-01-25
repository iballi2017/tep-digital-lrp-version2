import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsMultiplicationStageOneComponent } from './basic-operations-multiplication-stage-one.component';

describe('BasicOperationsMultiplicationStageOneComponent', () => {
  let component: BasicOperationsMultiplicationStageOneComponent;
  let fixture: ComponentFixture<BasicOperationsMultiplicationStageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsMultiplicationStageOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicOperationsMultiplicationStageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
