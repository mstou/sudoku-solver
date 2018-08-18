import React from 'react';
import './styles.css';

const Cell = ({data, row, column, onChange}) => (
  <input
    className="sudoku-cell"
    value={(data!==0) ? data : '' }
    onChange={(e) => onChange(row,column,e.target.value.slice(-1))}
  />
);

export default Cell;
