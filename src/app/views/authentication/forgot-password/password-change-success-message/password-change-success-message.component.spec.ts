import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordChangeSuccessMessageComponent } from './password-change-success-message.component';

describe('PasswordChangeSuccessMessageComponent', () => {
  let component: PasswordChangeSuccessMessageComponent;
  let fixture: ComponentFixture<PasswordChangeSuccessMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordChangeSuccessMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordChangeSuccessMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
