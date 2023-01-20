import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PlaceValueLevelResultEffects } from './place-value-level-result.effects';

describe('PlaceValueLevelResultEffects', () => {
  let actions$: Observable<any>;
  let effects: PlaceValueLevelResultEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PlaceValueLevelResultEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PlaceValueLevelResultEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
