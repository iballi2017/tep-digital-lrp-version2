import { reducer, initialState } from './basic-operations-division-level-result.reducer';

describe('BasicOperationsDivisionLevelResult Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
