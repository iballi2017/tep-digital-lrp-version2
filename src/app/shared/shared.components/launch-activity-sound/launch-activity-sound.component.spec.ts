import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchActivitySoundComponent } from './launch-activity-sound.component';

describe('LaunchActivitySoundComponent', () => {
  let component: LaunchActivitySoundComponent;
  let fixture: ComponentFixture<LaunchActivitySoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchActivitySoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchActivitySoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
