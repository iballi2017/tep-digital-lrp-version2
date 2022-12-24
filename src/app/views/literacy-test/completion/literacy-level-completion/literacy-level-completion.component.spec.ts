import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteracyLevelCompletionComponent } from './literacy-level-completion.component';

describe('LiteracyLevelCompletionComponent', () => {
  let component: LiteracyLevelCompletionComponent;
  let fixture: ComponentFixture<LiteracyLevelCompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiteracyLevelCompletionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiteracyLevelCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
