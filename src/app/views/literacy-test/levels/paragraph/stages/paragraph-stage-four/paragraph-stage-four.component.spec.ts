import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphStageFourComponent } from './paragraph-stage-four.component';

describe('ParagraphStageFourComponent', () => {
  let component: ParagraphStageFourComponent;
  let fixture: ComponentFixture<ParagraphStageFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagraphStageFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParagraphStageFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
