import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceValueStageOneInstructionalVideoComponent } from './place-value-stage-one-instructional-video.component';

describe('PlaceValueStageOneInstructionalVideoComponent', () => {
  let component: PlaceValueStageOneInstructionalVideoComponent;
  let fixture: ComponentFixture<PlaceValueStageOneInstructionalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceValueStageOneInstructionalVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceValueStageOneInstructionalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
