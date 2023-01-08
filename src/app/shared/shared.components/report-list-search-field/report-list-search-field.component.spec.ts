import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportListSearchFieldComponent } from './report-list-search-field.component';

describe('ReportListSearchFieldComponent', () => {
  let component: ReportListSearchFieldComponent;
  let fixture: ComponentFixture<ReportListSearchFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportListSearchFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportListSearchFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
