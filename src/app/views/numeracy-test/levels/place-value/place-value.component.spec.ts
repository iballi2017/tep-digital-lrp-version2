import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceValueComponent } from './place-value.component';

describe('PlaceValueComponent', () => {
  let component: PlaceValueComponent;
  let fixture: ComponentFixture<PlaceValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
