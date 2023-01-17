import { TestBed } from '@angular/core/testing';

import { PlaceValueService } from './place-value.service';

describe('PlaceValueService', () => {
  let service: PlaceValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
