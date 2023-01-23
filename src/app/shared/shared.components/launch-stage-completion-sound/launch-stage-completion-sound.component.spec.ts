import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchStageCompletionSoundComponent } from './launch-stage-completion-sound.component';

describe('LaunchStageCompletionSoundComponent', () => {
  let component: LaunchStageCompletionSoundComponent;
  let fixture: ComponentFixture<LaunchStageCompletionSoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchStageCompletionSoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchStageCompletionSoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
