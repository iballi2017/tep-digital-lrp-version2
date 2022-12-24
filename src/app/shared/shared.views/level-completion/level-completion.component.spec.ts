import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelCompletionComponent } from './level-completion.component';

describe('LevelCompletionComponent', () => {
  let component: LevelCompletionComponent;
  let fixture: ComponentFixture<LevelCompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelCompletionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
