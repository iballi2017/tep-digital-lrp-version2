import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticalsComponent } from './practicals.component';

describe('PracticalsComponent', () => {
  let component: PracticalsComponent;
  let fixture: ComponentFixture<PracticalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
