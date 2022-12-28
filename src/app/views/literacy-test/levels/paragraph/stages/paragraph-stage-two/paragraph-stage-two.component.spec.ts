import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphStageTwoComponent } from './paragraph-stage-two.component';

describe('ParagraphStageTwoComponent', () => {
  let component: ParagraphStageTwoComponent;
  let fixture: ComponentFixture<ParagraphStageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagraphStageTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParagraphStageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
