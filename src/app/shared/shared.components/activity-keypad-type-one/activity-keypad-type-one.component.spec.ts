import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityKeypadTypeOneComponent } from './activity-keypad-type-one.component';

describe('ActivityKeypadTypeOneComponent', () => {
  let component: ActivityKeypadTypeOneComponent;
  let fixture: ComponentFixture<ActivityKeypadTypeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityKeypadTypeOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityKeypadTypeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
