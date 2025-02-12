// Controle TDD

// Fonction principale pour résoudre le problème des N-Reines

export function solveNQueens(n: number): string[][][] {
    // Cas de base pour n = 0, 1, 2, 3
    if (n === 0) return [];
    if (n === 1) return [[["#"]]];
    if (n === 2 || n === 3) return [];

    const board: string[][] = Array.from({ length: n }, () => Array(n).fill('O'));

    // Fonction pour vérifier si une reine peut être placée en toute sécurité
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

    // Fonction récursive pour résoudre le problème des N-Reines
    function solve(col: number) {
        // Si toutes les colonnes sont remplies, ajouter la solution
        if (col === n) {
            solutions.push(board.map(row => row.slice()));
            return;
        }
        // Essayer de placer une reine dans chaque ligne de la colonne actuelle
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