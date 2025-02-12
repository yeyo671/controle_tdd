export function solveNQueens(n: number): string[][][] {
    if (n === 0) return [];
    if (n === 1) return [[["#"]]];
    if (n === 2 || n === 3) return [];

    const board: string[][] = Array.from({ length: n }, () => Array(n).fill('O'));

    function isSafe(board: string[][], row: number, col: number): boolean {
        for (let i = 0; i < col; i++) {
            if (board[row][i] === '#') return false;
        }
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === '#') return false;
        }
        for (let i = row, j = col; i < n && j >= 0; i++, j--) {
            if (board[i][j] === '#') return false;
        }
        return true;
    }

    function solve(col: number) {
        if (col === n) {
            solutions.push(board.map(row => row.slice()));
            return;
        }
        for (let i = 0; i < n; i++) {
            if (isSafe(board, i, col)) {
                board[i][col] = '#';
                solve(col + 1);
                board[i][col] = 'O';
            }
        }
    }

    const solutions: string[][][] = [];
    solve(0);
    return solutions;
}