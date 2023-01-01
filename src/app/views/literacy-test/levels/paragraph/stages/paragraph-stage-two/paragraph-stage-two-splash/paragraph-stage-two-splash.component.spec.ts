import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphStageTwoSplashComponent } from './paragraph-stage-two-splash.component';

describe('ParagraphStageTwoSplashComponent', () => {
  let component: ParagraphStageTwoSplashComponent;
  let fixture: ComponentFixture<ParagraphStageTwoSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagraphStageTwoSplashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParagraphStageTwoSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
