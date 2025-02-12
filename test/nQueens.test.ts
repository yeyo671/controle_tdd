import { solveNQueens } from '../src/nQueens';

test('solveNQueens should return an empty array for n = 0', () => {
  expect(solveNQueens(0)).toEqual([]);
});

test('solveNQueens should return the correct solution for n = 1', () => {
  expect(solveNQueens(1)).toEqual([
    [["#"]]
  ]);
});

test('solveNQueens should return an empty array for n = 2', () => {
  expect(solveNQueens(2)).toEqual([]);
});