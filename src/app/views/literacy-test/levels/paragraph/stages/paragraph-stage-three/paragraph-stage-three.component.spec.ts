import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphStageThreeComponent } from './paragraph-stage-three.component';

describe('ParagraphStageThreeComponent', () => {
  let component: ParagraphStageThreeComponent;
  let fixture: ComponentFixture<ParagraphStageThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagraphStageThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParagraphStageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
