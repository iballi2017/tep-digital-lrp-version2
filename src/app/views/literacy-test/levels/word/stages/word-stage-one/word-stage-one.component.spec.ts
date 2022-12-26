import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordStageOneComponent } from './word-stage-one.component';

describe('WordStageOneComponent', () => {
  let component: WordStageOneComponent;
  let fixture: ComponentFixture<WordStageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordStageOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordStageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
