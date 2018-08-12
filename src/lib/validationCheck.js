import { getColumn, getSector } from './commons';

const isColumnValid = (board, i, j, num) => (
  // returns false iff there is another appearance of 'num' in column j
  getColumn(board,j).find( (elem,index) => (
    elem===num && index!==i
  )) === undefined
);

const isRowValid = (board, i, j, num) => (
  //returns false iff there is another appearance of 'num' in row i
  board[i].find( (elem,index) => (
    elem===num && index!==j
  )) === undefined
);

const isSectorValid = (board, i, j, num) => (
  //returns false iff there is another appearance of 'num' in the sector (i,j) belongs to
  getSector(board,i,j).find(
    (elem) => elem===num
  ) === undefined
);

const isNumberValid = (board, i, j, num) => (
  //can we place 'num' in board[i][j]?
  isRowValid(board,i,j,num)
  && isColumnValid(board,i,j,num)
  && isSectorValid(board, i, j, num)
);

// tests
// const sudokuBoard = [
//   [2,0,0,7,0,0,0,0,0],
//   [0,4,0,6,0,0,0,5,9],
//   [0,0,5,0,4,9,8,0,0],
//   [0,0,0,0,0,0,0,9,0],
//   [7,0,2,0,0,0,5,0,1],
//   [0,9,0,0,0,0,0,0,0],
//   [0,0,3,4,1,0,9,0,0],
//   [6,2,0,0,0,5,0,3,0],
//   [0,0,0,0,0,3,0,0,6]
// ];
