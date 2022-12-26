import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordStageThreeSplashComponent } from './word-stage-three-splash.component';

describe('WordStageThreeSplashComponent', () => {
  let component: WordStageThreeSplashComponent;
  let fixture: ComponentFixture<WordStageThreeSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordStageThreeSplashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordStageThreeSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
