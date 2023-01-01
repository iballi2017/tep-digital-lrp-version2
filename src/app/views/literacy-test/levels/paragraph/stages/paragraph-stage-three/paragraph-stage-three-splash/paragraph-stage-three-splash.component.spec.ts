import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphStageThreeSplashComponent } from './paragraph-stage-three-splash.component';

describe('ParagraphStageThreeSplashComponent', () => {
  let component: ParagraphStageThreeSplashComponent;
  let fixture: ComponentFixture<ParagraphStageThreeSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagraphStageThreeSplashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParagraphStageThreeSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
