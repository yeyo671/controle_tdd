import { solveNQueens } from '../src/nQueens';

test('solveNQueens should return an empty array for n = 0', () => {
  expect(solveNQueens(0)).toEqual([]);
});