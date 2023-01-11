import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveWebpagesComponent } from './responsive-webpages.component';

describe('ResponsiveWebpagesComponent', () => {
  let component: ResponsiveWebpagesComponent;
  let fixture: ComponentFixture<ResponsiveWebpagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveWebpagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsiveWebpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
