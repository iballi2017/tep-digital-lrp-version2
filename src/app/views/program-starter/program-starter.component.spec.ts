import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramStarterComponent } from './program-starter.component';

describe('ProgramStarterComponent', () => {
  let component: ProgramStarterComponent;
  let fixture: ComponentFixture<ProgramStarterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramStarterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
