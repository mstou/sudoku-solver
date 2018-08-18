const clearBoard = () => ({
  type: 'CLEAR_BOARD'
});

const changeCell = (rowIndex,columnIndex,inputChar) => ({
  type: 'CHANGE_CELL',
  payload: {
    row: rowIndex,
    column: columnIndex,
    input: inputChar
  }
});

const solveBoard = () => ({
  type: 'SOLVE_BOARD'
})

export { clearBoard, changeCell, solveBoard };
