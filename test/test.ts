import { solveNQueens } from "../src/nQueens";

// Fonction pour afficher les solutions de manière lisible
function printSolutions(solutions: string[][][]) {
    solutions.forEach((solution: string[][], index: number) => {
        console.log(`Solution ${index + 1}:`);
        solution.forEach((row: string[]) => console.log(row.join(' ')));
        console.log('\n');
    });
}

// Tester la méthode solveNQueens avec différentes valeurs de n
const testCases: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

testCases.forEach((n: number) => {
    console.log(`Testing solveNQueens with n = ${n}`);
    const solutions = solveNQueens(n);
    console.log(`Number of solutions for n = ${n}: ${solutions.length}`);
    printSolutions(solutions);
});