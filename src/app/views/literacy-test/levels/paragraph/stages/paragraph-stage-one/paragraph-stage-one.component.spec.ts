import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphStageOneComponent } from './paragraph-stage-one.component';

describe('ParagraphStageOneComponent', () => {
  let component: ParagraphStageOneComponent;
  let fixture: ComponentFixture<ParagraphStageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagraphStageOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParagraphStageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
