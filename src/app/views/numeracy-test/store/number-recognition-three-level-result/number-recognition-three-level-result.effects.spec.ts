import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { NumberRecognitionThreeLevelResultEffects } from './number-recognition-three-level-result.effects';

describe('NumberRecognitionThreeLevelResultEffects', () => {
  let actions$: Observable<any>;
  let effects: NumberRecognitionThreeLevelResultEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NumberRecognitionThreeLevelResultEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(NumberRecognitionThreeLevelResultEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
