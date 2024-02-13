/* A Sudoku board is a 9x9 grid composed of integers from 1 to 9.
Each row, column, and 3x3 subgrid must contain all the digits from 1 to 9 without repetition.

Write a function called isValidSudoku that takes a 2D array representing a Sudoku board
and returns true if the board is valid according to Sudoku rules, and false otherwise.

For example:

    The following 2D array represents a valid Sudoku board:
const board1 = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

The following 2D array represents an invalid Sudoku board:
const board2 = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 8], // The last row contains a duplicate "8"
];
*/

const board = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

const board2 = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 8],
];

const isValidSudoku = (board) => {
    //We check all rows and cols
    for (let i = 0; i < board.length; i++) {
        let sumRows = 0;
        let sumCols = 0;

        for (let k = 0; k < board[i].length; k++) {
            sumCols += board[k][i];
            sumRows += board[i][k];
        }
        if (sumCols !== 45 || sumRows !== 45) {
            return false;
        }
    }

    //We check 3x3
    for (let row = 0; row < 9; row += 3) {
        for (let col = 0; col < 9; col += 3) {
            let sumSubgrid = 0;
            for (let i = row; i < row + 3; i++) {
                for (let j = col; j < col + 3; j++) {
                    sumSubgrid += board[i][j];
                }
            }
            if (sumSubgrid !== 45) {
                return false;
            }
        }
    }
    return true;
};

console.log(isValidSudoku(board));
