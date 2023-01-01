import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphStageThreeInstructionalVideoComponent } from './paragraph-stage-three-instructional-video.component';

describe('ParagraphStageThreeInstructionalVideoComponent', () => {
  let component: ParagraphStageThreeInstructionalVideoComponent;
  let fixture: ComponentFixture<ParagraphStageThreeInstructionalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagraphStageThreeInstructionalVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParagraphStageThreeInstructionalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
