import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsAdditionStageOneSplashComponent } from './basic-operations-addition-stage-one-splash.component';

describe('BasicOperationsAdditionStageOneSplashComponent', () => {
  let component: BasicOperationsAdditionStageOneSplashComponent;
  let fixture: ComponentFixture<BasicOperationsAdditionStageOneSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsAdditionStageOneSplashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicOperationsAdditionStageOneSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
