import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsDivisionStageTwoSplashComponent } from './basic-operations-division-stage-two-splash.component';

describe('BasicOperationsDivisionStageTwoSplashComponent', () => {
  let component: BasicOperationsDivisionStageTwoSplashComponent;
  let fixture: ComponentFixture<BasicOperationsDivisionStageTwoSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsDivisionStageTwoSplashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicOperationsDivisionStageTwoSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
