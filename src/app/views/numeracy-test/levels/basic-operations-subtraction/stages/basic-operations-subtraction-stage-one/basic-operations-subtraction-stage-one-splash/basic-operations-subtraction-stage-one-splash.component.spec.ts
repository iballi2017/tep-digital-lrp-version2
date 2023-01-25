import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsSubtractionStageOneSplashComponent } from './basic-operations-subtraction-stage-one-splash.component';

describe('BasicOperationsSubtractionStageOneSplashComponent', () => {
  let component: BasicOperationsSubtractionStageOneSplashComponent;
  let fixture: ComponentFixture<BasicOperationsSubtractionStageOneSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsSubtractionStageOneSplashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicOperationsSubtractionStageOneSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
