import React from 'react';
import './styles.css';

const Cell = ({data, row, column}) => (
  <input
    className="sudoku-cell"
    value={(data!==0) ? data : undefined }
    onChange={ (e) => console.log(e.target.value)}
  />
);

export default Cell;
