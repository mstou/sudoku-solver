import React from 'react';
import Cell from './cell';
//import './styles.css';

const Row = ({row, rowIndex}) => (
  <div className="sudoku-row">
    {row.map( (num,columnIndex) => (
      <Cell
        data={num}
        row={rowIndex}
        column={columnIndex}
        key={`${rowIndex}${columnIndex}`}
      />
    ))}
  </div>
);

export default Row;
