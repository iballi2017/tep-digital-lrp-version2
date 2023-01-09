import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsSubtractionComponent } from './basic-operations-subtraction.component';

describe('BasicOperationsSubtractionComponent', () => {
  let component: BasicOperationsSubtractionComponent;
  let fixture: ComponentFixture<BasicOperationsSubtractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsSubtractionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicOperationsSubtractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
