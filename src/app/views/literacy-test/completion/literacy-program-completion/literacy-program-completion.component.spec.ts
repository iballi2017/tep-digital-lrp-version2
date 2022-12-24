import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteracyProgramCompletionComponent } from './literacy-program-completion.component';

describe('LiteracyProgramCompletionComponent', () => {
  let component: LiteracyProgramCompletionComponent;
  let fixture: ComponentFixture<LiteracyProgramCompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiteracyProgramCompletionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiteracyProgramCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
