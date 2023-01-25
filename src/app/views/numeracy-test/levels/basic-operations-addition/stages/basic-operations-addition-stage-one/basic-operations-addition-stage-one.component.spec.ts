import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsAdditionStageOneComponent } from './basic-operations-addition-stage-one.component';

describe('BasicOperationsAdditionStageOneComponent', () => {
  let component: BasicOperationsAdditionStageOneComponent;
  let fixture: ComponentFixture<BasicOperationsAdditionStageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsAdditionStageOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicOperationsAdditionStageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
