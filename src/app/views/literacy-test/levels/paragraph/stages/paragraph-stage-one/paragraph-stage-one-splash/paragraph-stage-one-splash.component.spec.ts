import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphStageOneSplashComponent } from './paragraph-stage-one-splash.component';

describe('ParagraphStageOneSplashComponent', () => {
  let component: ParagraphStageOneSplashComponent;
  let fixture: ComponentFixture<ParagraphStageOneSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagraphStageOneSplashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParagraphStageOneSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
