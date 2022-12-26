import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordStageThreeComponent } from './word-stage-three.component';

describe('WordStageThreeComponent', () => {
  let component: WordStageThreeComponent;
  let fixture: ComponentFixture<WordStageThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordStageThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordStageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
