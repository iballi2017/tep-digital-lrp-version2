import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteracyStageCompletionComponent } from './literacy-stage-completion.component';

describe('LiteracyStageCompletionComponent', () => {
  let component: LiteracyStageCompletionComponent;
  let fixture: ComponentFixture<LiteracyStageCompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiteracyStageCompletionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiteracyStageCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
