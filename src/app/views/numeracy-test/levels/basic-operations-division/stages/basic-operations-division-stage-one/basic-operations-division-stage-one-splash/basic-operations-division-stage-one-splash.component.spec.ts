import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsDivisionStageOneSplashComponent } from './basic-operations-division-stage-one-splash.component';

describe('BasicOperationsDivisionStageOneSplashComponent', () => {
  let component: BasicOperationsDivisionStageOneSplashComponent;
  let fixture: ComponentFixture<BasicOperationsDivisionStageOneSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsDivisionStageOneSplashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicOperationsDivisionStageOneSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
