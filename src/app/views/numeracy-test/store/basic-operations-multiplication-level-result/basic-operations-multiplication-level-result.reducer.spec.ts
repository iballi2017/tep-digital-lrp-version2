import { reducer, initialState } from './basic-operations-multiplication-level-result.reducer';

describe('BasicOperationsMultiplicationLevelResult Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
