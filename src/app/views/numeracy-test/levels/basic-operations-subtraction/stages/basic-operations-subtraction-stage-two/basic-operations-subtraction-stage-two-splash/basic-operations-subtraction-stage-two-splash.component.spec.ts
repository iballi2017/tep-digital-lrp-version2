import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsSubtractionStageTwoSplashComponent } from './basic-operations-subtraction-stage-two-splash.component';

describe('BasicOperationsSubtractionStageTwoSplashComponent', () => {
  let component: BasicOperationsSubtractionStageTwoSplashComponent;
  let fixture: ComponentFixture<BasicOperationsSubtractionStageTwoSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsSubtractionStageTwoSplashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicOperationsSubtractionStageTwoSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
