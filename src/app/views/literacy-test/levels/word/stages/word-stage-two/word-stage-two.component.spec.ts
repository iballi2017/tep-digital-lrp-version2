import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordStageTwoComponent } from './word-stage-two.component';

describe('WordStageTwoComponent', () => {
  let component: WordStageTwoComponent;
  let fixture: ComponentFixture<WordStageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordStageTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordStageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
