import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterStageThreeSplashComponent } from './letter-stage-three-splash.component';

describe('LetterStageThreeSplashComponent', () => {
  let component: LetterStageThreeSplashComponent;
  let fixture: ComponentFixture<LetterStageThreeSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterStageThreeSplashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterStageThreeSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
