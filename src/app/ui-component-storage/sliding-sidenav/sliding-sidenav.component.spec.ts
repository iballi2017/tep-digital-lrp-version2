import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingSidenavComponent } from './sliding-sidenav.component';

describe('SlidingSidenavComponent', () => {
  let component: SlidingSidenavComponent;
  let fixture: ComponentFixture<SlidingSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidingSidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidingSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
