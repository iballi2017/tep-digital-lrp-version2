import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooleanAlertDialogComponent } from './boolean-alert-dialog.component';

describe('BooleanAlertDialogComponent', () => {
  let component: BooleanAlertDialogComponent;
  let fixture: ComponentFixture<BooleanAlertDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooleanAlertDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooleanAlertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
