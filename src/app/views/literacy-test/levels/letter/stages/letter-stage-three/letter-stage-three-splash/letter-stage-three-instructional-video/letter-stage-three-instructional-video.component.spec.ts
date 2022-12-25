import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterStageThreeInstructionalVideoComponent } from './letter-stage-three-instructional-video.component';

describe('LetterStageThreeInstructionalVideoComponent', () => {
  let component: LetterStageThreeInstructionalVideoComponent;
  let fixture: ComponentFixture<LetterStageThreeInstructionalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterStageThreeInstructionalVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterStageThreeInstructionalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
