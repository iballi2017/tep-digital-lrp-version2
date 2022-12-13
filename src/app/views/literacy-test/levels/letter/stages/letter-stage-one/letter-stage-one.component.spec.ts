import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterStageOneComponent } from './letter-stage-one.component';

describe('LetterStageOneComponent', () => {
  let component: LetterStageOneComponent;
  let fixture: ComponentFixture<LetterStageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterStageOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterStageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
