const getColumn = (board,columnIndex) => (
  board.reduce( (acc,row) => (
    (row[columnIndex]===undefined) ?
    acc
    :[...acc,row[columnIndex]]
  ),
  []
));

const getSubMatrix =  (board,topX,topY,bottomX,bottomY) => (
  board.reduce( (acc,row,rowIndex) => (
    (rowIndex>=topX && rowIndex<=bottomX) ?
      [...acc,
        row.filter( (elem,columnIndex) =>
        (columnIndex>=topY && columnIndex<=bottomY))
      ]
      :
      acc
    ),
    []
));

const getSector = (board,x,y) => {
  const horizontalSector = Math.floor(y/3);
  const verticalSector = Math.floor(x/3);

  const topX = verticalSector*3;
  const topY = horizontalSector*3;

  const subBoard = getSubMatrix(board,topX,topY,topX+2,topY+2);

  return subBoard.reduce( (acc,row) => ([...acc,...row]), []);

};

const emptyBoard = () => (
  [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]
  ]
);

export { getColumn, getSector, emptyBoard };


// ------DOCUMENTATION------


// --getColumn--
// returns the column in the 'columnIndex' index as an array.
// board should be in the format:
// [
//   [1,2,3],
//   [73,42,17],
//   [8,22]
// ]


// --getSubMatrix--
// returns the 2D subarray enclosed by the top left and bottom right coordinates specified

//
// --getSector--
// takes as params a sudoku board and coordinates of an element
// returns the sudoku-sector the element belongs to, in a single 1D array
