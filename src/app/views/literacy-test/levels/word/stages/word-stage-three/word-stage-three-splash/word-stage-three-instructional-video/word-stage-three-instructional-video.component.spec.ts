import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordStageThreeInstructionalVideoComponent } from './word-stage-three-instructional-video.component';

describe('WordStageThreeInstructionalVideoComponent', () => {
  let component: WordStageThreeInstructionalVideoComponent;
  let fixture: ComponentFixture<WordStageThreeInstructionalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordStageThreeInstructionalVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordStageThreeInstructionalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
