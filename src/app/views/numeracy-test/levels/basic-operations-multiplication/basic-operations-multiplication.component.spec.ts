import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsMultiplicationComponent } from './basic-operations-multiplication.component';

describe('BasicOperationsMultiplicationComponent', () => {
  let component: BasicOperationsMultiplicationComponent;
  let fixture: ComponentFixture<BasicOperationsMultiplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsMultiplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicOperationsMultiplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
