import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterStageTwoInstructionalVideoComponent } from './letter-stage-two-instructional-video.component';

describe('LetterStageTwoInstructionalVideoComponent', () => {
  let component: LetterStageTwoInstructionalVideoComponent;
  let fixture: ComponentFixture<LetterStageTwoInstructionalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterStageTwoInstructionalVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterStageTwoInstructionalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
