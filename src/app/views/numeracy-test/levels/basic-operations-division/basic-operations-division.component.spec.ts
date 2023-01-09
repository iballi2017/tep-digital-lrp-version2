import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsDivisionComponent } from './basic-operations-division.component';

describe('BasicOperationsDivisionComponent', () => {
  let component: BasicOperationsDivisionComponent;
  let fixture: ComponentFixture<BasicOperationsDivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsDivisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicOperationsDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
