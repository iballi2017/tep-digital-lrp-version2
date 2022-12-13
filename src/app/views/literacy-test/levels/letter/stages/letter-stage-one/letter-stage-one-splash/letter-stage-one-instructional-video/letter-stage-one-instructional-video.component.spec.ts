import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterStageOneInstructionalVideoComponent } from './letter-stage-one-instructional-video.component';

describe('LetterStageOneInstructionalVideoComponent', () => {
  let component: LetterStageOneInstructionalVideoComponent;
  let fixture: ComponentFixture<LetterStageOneInstructionalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterStageOneInstructionalVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterStageOneInstructionalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
