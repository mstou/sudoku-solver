
const availableNumbers = [1,2,3,4,5,6,7,8,9];

const attachPossibleNumbers = (board) => (
  // takes a sudoku board and returns a 9x9 matrix with each
  // cell being an object that contains the number on the board and an
  // array with all the available numbers to fill the cell with.
  board.map( row => (
    row.map( cell => ({
      data: cell,
      possibleNumbers: (cell===0) ? availableNumbers : []
    }))
  ))
);

export { attachPossibleNumbers };
