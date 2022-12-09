import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbTopbarComponent } from './breadcrumb-topbar.component';

describe('BreadcrumbTopbarComponent', () => {
  let component: BreadcrumbTopbarComponent;
  let fixture: ComponentFixture<BreadcrumbTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbTopbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcrumbTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
