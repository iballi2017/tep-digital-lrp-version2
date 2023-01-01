import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphStageFourInstructionalVideoComponent } from './paragraph-stage-four-instructional-video.component';

describe('ParagraphStageFourInstructionalVideoComponent', () => {
  let component: ParagraphStageFourInstructionalVideoComponent;
  let fixture: ComponentFixture<ParagraphStageFourInstructionalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagraphStageFourInstructionalVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParagraphStageFourInstructionalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
