import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupantListComponent } from './occupant-list.component';

describe('OccupantListComponent', () => {
  let component: OccupantListComponent;
  let fixture: ComponentFixture<OccupantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OccupantListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OccupantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
