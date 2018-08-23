import { getColumn, getSector, updateCell } from './commons';

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

const findImplications1D = (possibleNumbersRow,rowIndex) => (
  possibleNumbersRow.reduce( (acc,elem,elemIndex) => (
    (elem.length===1) ?
    [
      ...acc,
      {
      row: rowIndex,
      column: elemIndex,
      num: elem[0]
    }]
    :
    acc
  ),[])
);

const makeImplications = (board) => {
  const possibleNumbers = eliminateRowNumbers(
    board,
    eliminateColumnNumbers(
      board,
      eliminateSectorNumbers(
        board,
        attachPossibleNumbers(board)
      )
    ));

  const implications = possibleNumbers.reduce( (acc,row,rowIndex) => (
    [...acc, ...findImplications1D(row,rowIndex)]
  ), []);

  return (implications.length===0) ? board
  :
  makeImplications(
    implications.reduce( (acc,implication) => (
    updateCell(acc,implication.row,implication.column,implication.num)
  ), [...board ] )
 );

}

//makeImplications function, accepts a sudokuBoard, and checks if the current state of the board implies the position
// of some numbers. If so it fills them, and iterates until there are no such implications



export { makeImplications };
