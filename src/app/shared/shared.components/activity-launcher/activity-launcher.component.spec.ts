import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityLauncherComponent } from './activity-launcher.component';

describe('ActivityLauncherComponent', () => {
  let component: ActivityLauncherComponent;
  let fixture: ComponentFixture<ActivityLauncherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityLauncherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityLauncherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
