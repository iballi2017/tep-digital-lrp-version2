import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphStageOneInstructionalVideoComponent } from './paragraph-stage-one-instructional-video.component';

describe('ParagraphStageOneInstructionalVideoComponent', () => {
  let component: ParagraphStageOneInstructionalVideoComponent;
  let fixture: ComponentFixture<ParagraphStageOneInstructionalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagraphStageOneInstructionalVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParagraphStageOneInstructionalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
