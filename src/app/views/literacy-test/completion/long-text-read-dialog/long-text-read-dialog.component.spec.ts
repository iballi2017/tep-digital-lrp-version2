import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongTextReadDialogComponent } from './long-text-read-dialog.component';

describe('LongTextReadDialogComponent', () => {
  let component: LongTextReadDialogComponent;
  let fixture: ComponentFixture<LongTextReadDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongTextReadDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LongTextReadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
