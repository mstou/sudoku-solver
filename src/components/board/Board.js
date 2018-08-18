import React from 'react';
import Row from './row/Row';

const Board = ({ board }) => (
  <div className="sudoku-board">
    {board.map( (row,index) => (
      <Row row={row} />
    ))}
  </div>

)

export default Board;
