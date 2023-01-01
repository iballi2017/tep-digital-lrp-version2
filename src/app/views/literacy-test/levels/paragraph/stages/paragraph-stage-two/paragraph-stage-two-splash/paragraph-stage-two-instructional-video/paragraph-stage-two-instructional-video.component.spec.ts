import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphStageTwoInstructionalVideoComponent } from './paragraph-stage-two-instructional-video.component';

describe('ParagraphStageTwoInstructionalVideoComponent', () => {
  let component: ParagraphStageTwoInstructionalVideoComponent;
  let fixture: ComponentFixture<ParagraphStageTwoInstructionalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagraphStageTwoInstructionalVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParagraphStageTwoInstructionalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
