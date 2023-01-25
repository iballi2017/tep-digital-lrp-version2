import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsSubtractionStageTwoComponent } from './basic-operations-subtraction-stage-two.component';

describe('BasicOperationsSubtractionStageTwoComponent', () => {
  let component: BasicOperationsSubtractionStageTwoComponent;
  let fixture: ComponentFixture<BasicOperationsSubtractionStageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsSubtractionStageTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicOperationsSubtractionStageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
