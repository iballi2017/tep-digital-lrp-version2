import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterStageThreeComponent } from './letter-stage-three.component';

describe('LetterStageThreeComponent', () => {
  let component: LetterStageThreeComponent;
  let fixture: ComponentFixture<LetterStageThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterStageThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterStageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
