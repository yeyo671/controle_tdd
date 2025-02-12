import { solveNQueens } from '../src/nQueens';

test('solveNQueens should return an empty array for n = 0', () => {
  expect(solveNQueens(0)).toEqual([]);
});

test('solveNQueens should return a single solution for n = 1', () => {
  expect(solveNQueens(1)).toEqual([[["#"]]]);
});

test('solveNQueens should return an empty array for n = 2', () => {
  expect(solveNQueens(2)).toEqual([]);
});

test('solveNQueens should return an empty array for n = 3', () => {
  expect(solveNQueens(3)).toEqual([]);
});