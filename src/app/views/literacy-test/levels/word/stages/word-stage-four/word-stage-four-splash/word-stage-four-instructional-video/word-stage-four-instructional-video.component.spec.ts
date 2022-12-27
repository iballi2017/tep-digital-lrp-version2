import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordStageFourInstructionalVideoComponent } from './word-stage-four-instructional-video.component';

describe('WordStageFourInstructionalVideoComponent', () => {
  let component: WordStageFourInstructionalVideoComponent;
  let fixture: ComponentFixture<WordStageFourInstructionalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordStageFourInstructionalVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordStageFourInstructionalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
