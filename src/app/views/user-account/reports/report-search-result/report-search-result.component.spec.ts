import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSearchResultComponent } from './report-search-result.component';

describe('ReportSearchResultComponent', () => {
  let component: ReportSearchResultComponent;
  let fixture: ComponentFixture<ReportSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportSearchResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
