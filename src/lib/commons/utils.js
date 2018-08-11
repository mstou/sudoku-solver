const getColumn = (board,columnIndex) => (
  board.reduce( (acc,row) => (
    (row[columnIndex]===undefined) ?
    acc
    :[...acc,row[columnIndex]]
  ),
  []
));

// returns the column in the 'columnIndex' index as an array.
// board should be in the format:
// [
//   [1,2,3],
//   [73,42,17],
//   [8,22]
// ]

export { getColumn };
