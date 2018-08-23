import { getColumn, getSector } from './commons';

const availableNumbers = [1,2,3,4,5,6,7,8,9];

const attachPossibleNumbers = (board) => (
  // takes a sudoku board and returns a 9x9 matrix with each
  // cell containing an array with all the available numbers to fill the cell with.
  board.map( row => (
    row.map( cell => (
      (cell===0) ? availableNumbers : []
    ))
  ))
);

const eliminateRowNumbers = (board, possibleNumbers) => (
  // for each cell's possible numbers, it eliminates nums that appear elsewhere in the same row
  possibleNumbers.map( (row,rowIndex) => (
    row.map( cellNums =>
      cellNums.filter( num => !board[rowIndex].includes(num) )
    )
  ))
);

const eliminateColumnNumbers = (board, possibleNumbers) => (
  // for each cell's possible numbers, it eliminates nums that appear elsewhere in the same column
  possibleNumbers.map( (row,rowIndex) => (
    row.map( (cellNums,columnIndex) =>
      cellNums.filter( num => !getColumn(board,columnIndex).includes(num) )
    )
  ))
);

const eliminateSectorNumbers = (board, possibleNumbers) => (
  // for each cell's possible numbers, it eliminates nums that appear elsewhere in the same sector
  possibleNumbers.map( (row,rowIndex) => (
    row.map( (cellNums,columnIndex) =>
      cellNums.filter( num => !getSector(board,rowIndex,columnIndex).includes(num) )
    )
  ))
);

export { attachPossibleNumbers, eliminateRowNumbers, eliminateColumnNumbers, eliminateSectorNumbers };
