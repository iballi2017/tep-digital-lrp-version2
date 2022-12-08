import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOccupantSelectionComponent } from './test-occupant-selection.component';

describe('TestOccupantSelectionComponent', () => {
  let component: TestOccupantSelectionComponent;
  let fixture: ComponentFixture<TestOccupantSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestOccupantSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestOccupantSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
