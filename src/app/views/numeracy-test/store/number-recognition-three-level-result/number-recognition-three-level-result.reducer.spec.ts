import { reducer, initialState } from './number-recognition-three-level-result.reducer';

describe('NumberRecognitionThreeLevelResult Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
