import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeracyProgramCompletionComponent } from './numeracy-program-completion.component';

describe('NumeracyProgramCompletionComponent', () => {
  let component: NumeracyProgramCompletionComponent;
  let fixture: ComponentFixture<NumeracyProgramCompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumeracyProgramCompletionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumeracyProgramCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
