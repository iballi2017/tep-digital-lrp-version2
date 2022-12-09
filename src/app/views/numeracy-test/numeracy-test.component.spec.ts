import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeracyTestComponent } from './numeracy-test.component';

describe('NumeracyTestComponent', () => {
  let component: NumeracyTestComponent;
  let fixture: ComponentFixture<NumeracyTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumeracyTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumeracyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
