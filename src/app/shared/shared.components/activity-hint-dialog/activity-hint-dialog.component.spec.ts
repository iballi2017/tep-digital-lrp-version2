import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityHintDialogComponent } from './activity-hint-dialog.component';

describe('ActivityHintDialogComponent', () => {
  let component: ActivityHintDialogComponent;
  let fixture: ComponentFixture<ActivityHintDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityHintDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityHintDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
