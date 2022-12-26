import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordStageOneInstructionalVideoComponent } from './word-stage-one-instructional-video.component';

describe('WordStageOneInstructionalVideoComponent', () => {
  let component: WordStageOneInstructionalVideoComponent;
  let fixture: ComponentFixture<WordStageOneInstructionalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordStageOneInstructionalVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordStageOneInstructionalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
