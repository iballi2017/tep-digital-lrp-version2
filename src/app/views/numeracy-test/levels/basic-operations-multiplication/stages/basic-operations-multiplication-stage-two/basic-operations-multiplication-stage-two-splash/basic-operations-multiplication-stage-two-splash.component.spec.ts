import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsMultiplicationStageTwoSplashComponent } from './basic-operations-multiplication-stage-two-splash.component';

describe('BasicOperationsMultiplicationStageTwoSplashComponent', () => {
  let component: BasicOperationsMultiplicationStageTwoSplashComponent;
  let fixture: ComponentFixture<BasicOperationsMultiplicationStageTwoSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsMultiplicationStageTwoSplashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicOperationsMultiplicationStageTwoSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
