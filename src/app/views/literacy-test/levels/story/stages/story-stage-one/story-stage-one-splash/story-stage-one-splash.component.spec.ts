import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryStageOneSplashComponent } from './story-stage-one-splash.component';

describe('StoryStageOneSplashComponent', () => {
  let component: StoryStageOneSplashComponent;
  let fixture: ComponentFixture<StoryStageOneSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryStageOneSplashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryStageOneSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
