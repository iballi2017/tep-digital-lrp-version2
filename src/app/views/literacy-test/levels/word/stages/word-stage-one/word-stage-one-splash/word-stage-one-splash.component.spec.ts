import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordStageOneSplashComponent } from './word-stage-one-splash.component';

describe('WordStageOneSplashComponent', () => {
  let component: WordStageOneSplashComponent;
  let fixture: ComponentFixture<WordStageOneSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordStageOneSplashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordStageOneSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
