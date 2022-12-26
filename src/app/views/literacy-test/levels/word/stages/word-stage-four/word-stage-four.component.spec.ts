import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordStageFourComponent } from './word-stage-four.component';

describe('WordStageFourComponent', () => {
  let component: WordStageFourComponent;
  let fixture: ComponentFixture<WordStageFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordStageFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordStageFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
