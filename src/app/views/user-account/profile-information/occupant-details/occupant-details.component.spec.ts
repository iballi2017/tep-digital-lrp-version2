import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupantDetailsComponent } from './occupant-details.component';

describe('OccupantDetailsComponent', () => {
  let component: OccupantDetailsComponent;
  let fixture: ComponentFixture<OccupantDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OccupantDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OccupantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
