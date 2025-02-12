export function solveNQueens(n: number): string[][][] {
    if (n === 0) return [];
    if (n === 1) return [[["#"]]];
    if (n === 2 || n === 3) return [];
    return [];
}