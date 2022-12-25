import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterStageTwoSplashComponent } from './letter-stage-two-splash.component';

describe('LetterStageTwoSplashComponent', () => {
  let component: LetterStageTwoSplashComponent;
  let fixture: ComponentFixture<LetterStageTwoSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterStageTwoSplashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterStageTwoSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
