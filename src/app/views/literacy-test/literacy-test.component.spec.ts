import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteracyTestComponent } from './literacy-test.component';

describe('LiteracyTestComponent', () => {
  let component: LiteracyTestComponent;
  let fixture: ComponentFixture<LiteracyTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiteracyTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiteracyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
