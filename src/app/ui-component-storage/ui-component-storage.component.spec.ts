import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiComponentStorageComponent } from './ui-component-storage.component';

describe('UiComponentStorageComponent', () => {
  let component: UiComponentStorageComponent;
  let fixture: ComponentFixture<UiComponentStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiComponentStorageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiComponentStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
