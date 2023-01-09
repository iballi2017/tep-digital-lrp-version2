import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsAdditionComponent } from './basic-operations-addition.component';

describe('BasicOperationsAdditionComponent', () => {
  let component: BasicOperationsAdditionComponent;
  let fixture: ComponentFixture<BasicOperationsAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsAdditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicOperationsAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
