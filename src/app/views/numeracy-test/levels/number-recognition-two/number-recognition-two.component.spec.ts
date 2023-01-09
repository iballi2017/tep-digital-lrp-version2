import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberRecognitionTwoComponent } from './number-recognition-two.component';

describe('NumberRecognitionTwoComponent', () => {
  let component: NumberRecognitionTwoComponent;
  let fixture: ComponentFixture<NumberRecognitionTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberRecognitionTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberRecognitionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
