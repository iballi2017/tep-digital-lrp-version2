import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterStageOneSplashComponent } from './letter-stage-one-splash.component';

describe('LetterStageOneSplashComponent', () => {
  let component: LetterStageOneSplashComponent;
  let fixture: ComponentFixture<LetterStageOneSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterStageOneSplashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterStageOneSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
