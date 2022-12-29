import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryStageOneComponent } from './story-stage-one.component';

describe('StoryStageOneComponent', () => {
  let component: StoryStageOneComponent;
  let fixture: ComponentFixture<StoryStageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryStageOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryStageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
