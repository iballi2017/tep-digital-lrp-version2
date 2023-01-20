import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceValueStageOneComponent } from './place-value-stage-one.component';

describe('PlaceValueStageOneComponent', () => {
  let component: PlaceValueStageOneComponent;
  let fixture: ComponentFixture<PlaceValueStageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceValueStageOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceValueStageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
