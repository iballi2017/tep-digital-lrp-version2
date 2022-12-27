import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordStageFourSplashComponent } from './word-stage-four-splash.component';

describe('WordStageFourSplashComponent', () => {
  let component: WordStageFourSplashComponent;
  let fixture: ComponentFixture<WordStageFourSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordStageFourSplashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordStageFourSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
