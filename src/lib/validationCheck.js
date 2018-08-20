import { getColumn, getSector, updateCell } from './commons';

const availableNumbers = [1,2,3,4,5,6,7,8,9];

const isColumnValid = (board, column, num) => (
  // returns false iff there is another appearance of 'num' in column
  getColumn(board,column).find(
    elem => elem===num
  ) === undefined
);

const isRowValid = (board, row, num) => (
  //returns false iff there is another appearance of 'num' in row
  board[row].find(
    elem => elem===num
  ) === undefined
);

const isSectorValid = (board, i, j, num) => (
  //returns false iff there is another appearance of 'num' in the sector (i,j) belongs to
  getSector(board,i,j).find(
    elem => elem===num
  ) === undefined
);

const isNumberValid = (board, i, j, num) => (
  //can we place 'num' in board[i][j]?
  availableNumbers.includes(num)
  && isRowValid(board,i,num)
  && isColumnValid(board,j,num)
  && isSectorValid(board, i, j, num)
);

const cellsValidation = (board) => (
// takes a sudoku board and returns a 9x9 boolean matrix
// with (i,j) === true iff the number in position (i,j) is valid
// according to sudoku rules

  board.map( (row,rowIndex) => (
    row.map( (elem,columnIndex) => (
      elem===0 ||
      isNumberValid(
        updateCell(board,rowIndex,columnIndex,0),
        rowIndex,
        columnIndex,
        elem
      ))
   )
 ))
);

const boardValidation = (cellsValid) => {
  return cellsValid.every( row => row.every( x => x));
}

export { isNumberValid, cellsValidation, boardValidation };
