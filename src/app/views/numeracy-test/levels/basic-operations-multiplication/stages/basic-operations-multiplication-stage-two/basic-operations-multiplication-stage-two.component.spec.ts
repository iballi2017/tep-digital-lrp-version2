import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsMultiplicationStageTwoComponent } from './basic-operations-multiplication-stage-two.component';

describe('BasicOperationsMultiplicationStageTwoComponent', () => {
  let component: BasicOperationsMultiplicationStageTwoComponent;
  let fixture: ComponentFixture<BasicOperationsMultiplicationStageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsMultiplicationStageTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicOperationsMultiplicationStageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
