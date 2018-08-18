import React from 'react';
import Row from './row/Row';

const Board = ({ board, onCellChange }) => (
  <div className="sudoku-board">
    {board.map( (row,index) => (
      <Row
        row={row}
        onCellChange={(row,column,input) => onCellChange(row,column,input)}
        rowIndex={index}
        key={index}
      />
    ))}
  </div>
);

export default Board;
