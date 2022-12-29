import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryStageOneInstructionalVideoComponent } from './story-stage-one-instructional-video.component';

describe('StoryStageOneInstructionalVideoComponent', () => {
  let component: StoryStageOneInstructionalVideoComponent;
  let fixture: ComponentFixture<StoryStageOneInstructionalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryStageOneInstructionalVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryStageOneInstructionalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
