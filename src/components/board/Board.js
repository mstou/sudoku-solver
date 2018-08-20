import React from 'react';
import Row from './row/Row';

const Board = ({ board, valid, preSelected, solved, onCellChange }) => (
  <div className="sudoku-board">
    {board.map( (row,index) => (
      <Row
        row={row}
        onCellChange={(row,column,input) => onCellChange(row,column,input)}
        valid={valid[index]}
        solved={solved}
        preSelected={preSelected[index]}
        rowIndex={index}
        key={index}
      />
    ))}
  </div>
);

export default Board;
