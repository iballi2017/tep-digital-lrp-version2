import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsDivisionStageTwoComponent } from './basic-operations-division-stage-two.component';

describe('BasicOperationsDivisionStageTwoComponent', () => {
  let component: BasicOperationsDivisionStageTwoComponent;
  let fixture: ComponentFixture<BasicOperationsDivisionStageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsDivisionStageTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicOperationsDivisionStageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
