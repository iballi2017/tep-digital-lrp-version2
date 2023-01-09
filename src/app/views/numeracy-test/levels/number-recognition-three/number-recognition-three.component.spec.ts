import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberRecognitionThreeComponent } from './number-recognition-three.component';

describe('NumberRecognitionThreeComponent', () => {
  let component: NumberRecognitionThreeComponent;
  let fixture: ComponentFixture<NumberRecognitionThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberRecognitionThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberRecognitionThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
