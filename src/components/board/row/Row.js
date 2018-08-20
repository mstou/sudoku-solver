import React from 'react';
import Cell from './cell';
//import './styles.css';

const Row = ({row, rowIndex, valid, preSelected, solved, onCellChange}) => (
  <div className="sudoku-row">
    {row.map( (num,columnIndex) => (
      <Cell
        data={num}
        row={rowIndex}
        column={columnIndex}
        cellValid={valid[columnIndex]}
        preSelected={preSelected[columnIndex]}
        solved={solved}
        key={`${rowIndex}${columnIndex}`}
        onChange={(row,column,input) => onCellChange(row,column,input)}
      />
    ))}
  </div>
);

export default Row;
