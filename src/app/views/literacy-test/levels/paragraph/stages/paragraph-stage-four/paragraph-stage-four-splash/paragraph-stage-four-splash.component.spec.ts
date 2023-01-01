import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphStageFourSplashComponent } from './paragraph-stage-four-splash.component';

describe('ParagraphStageFourSplashComponent', () => {
  let component: ParagraphStageFourSplashComponent;
  let fixture: ComponentFixture<ParagraphStageFourSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagraphStageFourSplashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParagraphStageFourSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
