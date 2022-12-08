import { TestBed } from '@angular/core/testing';

import { OccupantService } from './occupant.service';

describe('OccupantService', () => {
  let service: OccupantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OccupantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
