import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordStageTwoInstructionalVideoComponent } from './word-stage-two-instructional-video.component';

describe('WordStageTwoInstructionalVideoComponent', () => {
  let component: WordStageTwoInstructionalVideoComponent;
  let fixture: ComponentFixture<WordStageTwoInstructionalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordStageTwoInstructionalVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordStageTwoInstructionalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
