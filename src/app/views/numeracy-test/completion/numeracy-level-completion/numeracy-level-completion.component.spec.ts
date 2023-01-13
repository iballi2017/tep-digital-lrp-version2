import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeracyLevelCompletionComponent } from './numeracy-level-completion.component';

describe('NumeracyLevelCompletionComponent', () => {
  let component: NumeracyLevelCompletionComponent;
  let fixture: ComponentFixture<NumeracyLevelCompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumeracyLevelCompletionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumeracyLevelCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
