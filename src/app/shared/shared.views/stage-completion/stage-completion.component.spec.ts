import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageCompletionComponent } from './stage-completion.component';

describe('StageCompletionComponent', () => {
  let component: StageCompletionComponent;
  let fixture: ComponentFixture<StageCompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StageCompletionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StageCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
