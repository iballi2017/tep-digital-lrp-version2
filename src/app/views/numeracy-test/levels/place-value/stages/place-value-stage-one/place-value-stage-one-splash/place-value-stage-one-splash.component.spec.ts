import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceValueStageOneSplashComponent } from './place-value-stage-one-splash.component';

describe('PlaceValueStageOneSplashComponent', () => {
  let component: PlaceValueStageOneSplashComponent;
  let fixture: ComponentFixture<PlaceValueStageOneSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceValueStageOneSplashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceValueStageOneSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
