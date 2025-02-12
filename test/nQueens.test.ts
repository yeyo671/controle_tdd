import { solveNQueens } from '../src/nQueens';

test('solveNQueens should return an empty array for n = 0', () => {
  expect(solveNQueens(0)).toEqual([]);
});

test('solveNQueens should return a single solution for n = 1', () => {
  expect(solveNQueens(1)).toEqual([
    [["#"]]
  ]);
});

test('solveNQueens should return an empty array for n = 2', () => {
  expect(solveNQueens(2)).toEqual([]);
});

test('solveNQueens should return an empty array for n = 3', () => {
  expect(solveNQueens(3)).toEqual([]);
});

test('solveNQueens should return correct solutions for n = 4', () => {
  const solutions = solveNQueens(4).map(solution =>
    solution.map(row => row.join(''))
  );
  expect(solutions.length).toBe(2);
  expect(solutions).toContainEqual([
    "O#OO",
    "OOO#",
    "#OOO",
    "OO#O"
  ]);
  expect(solutions).toContainEqual([
    "OO#O",
    "#OOO",
    "OOO#",
    "O#OO"
  ]);
});

test('solveNQueens should return correct solutions for n = 5', () => {
    const solutions = solveNQueens(5).map(solution =>
      solution.map(row => row.join(''))
    );
    expect(solutions.length).toBeGreaterThan(0);
});

test('solveNQueens should return correct solutions for n = 6', () => {
    const solutions = solveNQueens(6).map(solution =>
      solution.map(row => row.join(''))
    );
    expect(solutions.length).toBeGreaterThan(0);
});