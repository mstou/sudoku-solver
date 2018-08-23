import { updateCell } from './commons';
import { isNumberValid } from './validationCheck';
import { makeImplications } from './implications';

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

  const boardAfterImplications = makeImplications(board);

  const {row,column} = nextCellToFill(boardAfterImplications);

  if(row===-1){
    return {
      solved: true,
      board: boardAfterImplications
    };
  }

  return availableNumbers
  .filter(num => isNumberValid(boardAfterImplications,row,column,num))
  .reduce( (acc,num) => {
    if(acc.solved){
      return acc;
    }
    else {
      return solveSudoku(updateCell(boardAfterImplications,row,column,num));
    }
  },
    {
      solved: false,
      board: boardAfterImplications
  });
}

export { solveSudoku };
