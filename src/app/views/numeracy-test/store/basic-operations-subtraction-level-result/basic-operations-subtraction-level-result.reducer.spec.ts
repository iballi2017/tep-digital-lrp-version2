import { reducer, initialState } from './basic-operations-subtraction-level-result.reducer';

describe('BasicOperationsSubtractionLevelResult Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
