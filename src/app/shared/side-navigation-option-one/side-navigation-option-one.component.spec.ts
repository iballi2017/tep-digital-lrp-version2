import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavigationOptionOneComponent } from './side-navigation-option-one.component';

describe('SideNavigationOptionOneComponent', () => {
  let component: SideNavigationOptionOneComponent;
  let fixture: ComponentFixture<SideNavigationOptionOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavigationOptionOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNavigationOptionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
