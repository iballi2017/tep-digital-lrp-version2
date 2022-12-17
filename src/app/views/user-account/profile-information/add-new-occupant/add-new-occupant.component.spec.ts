import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewOccupantComponent } from './add-new-occupant.component';

describe('AddNewOccupantComponent', () => {
  let component: AddNewOccupantComponent;
  let fixture: ComponentFixture<AddNewOccupantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewOccupantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewOccupantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
