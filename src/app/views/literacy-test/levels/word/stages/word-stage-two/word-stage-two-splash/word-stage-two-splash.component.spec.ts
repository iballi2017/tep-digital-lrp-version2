import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordStageTwoSplashComponent } from './word-stage-two-splash.component';

describe('WordStageTwoSplashComponent', () => {
  let component: WordStageTwoSplashComponent;
  let fixture: ComponentFixture<WordStageTwoSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordStageTwoSplashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordStageTwoSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
