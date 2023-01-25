import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsAdditionStageTwoComponent } from './basic-operations-addition-stage-two.component';

describe('BasicOperationsAdditionStageTwoComponent', () => {
  let component: BasicOperationsAdditionStageTwoComponent;
  let fixture: ComponentFixture<BasicOperationsAdditionStageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsAdditionStageTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicOperationsAdditionStageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
