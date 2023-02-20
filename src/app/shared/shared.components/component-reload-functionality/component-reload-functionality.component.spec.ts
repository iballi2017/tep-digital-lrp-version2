import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentReloadFunctionalityComponent } from './component-reload-functionality.component';

describe('ComponentReloadFunctionalityComponent', () => {
  let component: ComponentReloadFunctionalityComponent;
  let fixture: ComponentFixture<ComponentReloadFunctionalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentReloadFunctionalityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentReloadFunctionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
