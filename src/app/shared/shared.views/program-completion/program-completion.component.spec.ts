import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramCompletionComponent } from './program-completion.component';

describe('ProgramCompletionComponent', () => {
  let component: ProgramCompletionComponent;
  let fixture: ComponentFixture<ProgramCompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramCompletionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
