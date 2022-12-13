import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterStageTwoComponent } from './letter-stage-two.component';

describe('LetterStageTwoComponent', () => {
  let component: LetterStageTwoComponent;
  let fixture: ComponentFixture<LetterStageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterStageTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterStageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
