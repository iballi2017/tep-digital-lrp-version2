import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeracyStageCompletionComponent } from './numeracy-stage-completion.component';

describe('NumeracyStageCompletionComponent', () => {
  let component: NumeracyStageCompletionComponent;
  let fixture: ComponentFixture<NumeracyStageCompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumeracyStageCompletionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumeracyStageCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
