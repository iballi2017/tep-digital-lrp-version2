import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsMultiplicationStageThreeComponent } from './basic-operations-multiplication-stage-three.component';

describe('BasicOperationsMultiplicationStageThreeComponent', () => {
  let component: BasicOperationsMultiplicationStageThreeComponent;
  let fixture: ComponentFixture<BasicOperationsMultiplicationStageThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsMultiplicationStageThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicOperationsMultiplicationStageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
