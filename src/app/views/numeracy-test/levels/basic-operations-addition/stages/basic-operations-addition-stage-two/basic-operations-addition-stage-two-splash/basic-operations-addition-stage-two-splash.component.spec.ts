import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsAdditionStageTwoSplashComponent } from './basic-operations-addition-stage-two-splash.component';

describe('BasicOperationsAdditionStageTwoSplashComponent', () => {
  let component: BasicOperationsAdditionStageTwoSplashComponent;
  let fixture: ComponentFixture<BasicOperationsAdditionStageTwoSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsAdditionStageTwoSplashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicOperationsAdditionStageTwoSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
