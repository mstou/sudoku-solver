import { updateCell } from './commons';
import { isNumberValid } from './validationCheck';

const availableNumbers = [1,2,3,4,5,6,7,8,9];

const nextCellToFill = (board) => {

  const rowIndex = board.findIndex( row =>
    row.find( elem => elem===0 ) !== undefined );

  return (rowIndex===-1) ? {row: -1, column: -1} :
    { row: rowIndex,
      column: board[rowIndex].indexOf(0)
    };
}

const solveSudoku = (board) => {

  const {row,column} = nextCellToFill(board);

  if(row===-1){
    return {
      solved: true,
      board: board
    };
  }

  return availableNumbers
  .filter(num => isNumberValid(board,row,column,num))
  .reduce( (acc,num) => {
    if(acc.solved){
      return acc;
    }
    else {
      return solveSudoku(updateCell(board,row,column,num));
    }
  },
    {
      solved: false,
      board: board
  });
}

export { solveSudoku };
