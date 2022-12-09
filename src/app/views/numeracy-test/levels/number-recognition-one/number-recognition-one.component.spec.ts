import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberRecognitionOneComponent } from './number-recognition-one.component';

describe('NumberRecognitionOneComponent', () => {
  let component: NumberRecognitionOneComponent;
  let fixture: ComponentFixture<NumberRecognitionOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberRecognitionOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberRecognitionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
