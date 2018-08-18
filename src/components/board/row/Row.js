import React from 'react';
import Cell from './cell';
//import './styles.css';

const Row = ({row, rowIndex, onCellChange}) => (
  <div className="sudoku-row">
    {row.map( (num,columnIndex) => (
      <Cell
        data={num}
        row={rowIndex}
        column={columnIndex}
        key={`${rowIndex}${columnIndex}`}
        onChange={(row,column,input) => onCellChange(row,column,input)}
      />
    ))}
  </div>
);

export default Row;
