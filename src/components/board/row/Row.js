import React from 'react';
import Cell from './cell';
//import './styles.css';

const Row = ({row}) => (
  <div className="sudoku-row">
    {row.map( (num,index) => (
      <Cell data={num} />
    ))}
  </div>
);

export default Row;
