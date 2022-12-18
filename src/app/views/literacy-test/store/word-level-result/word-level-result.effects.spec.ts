import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { WordLevelResultEffects } from './word-level-result.effects';

describe('WordLevelResultEffects', () => {
  let actions$: Observable<any>;
  let effects: WordLevelResultEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WordLevelResultEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(WordLevelResultEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
