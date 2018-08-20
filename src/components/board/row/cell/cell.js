import React from 'react';

const Cell = ({data, row, column, onChange}) => (
  <div className="sudoku-cell">
    <input
      value={(data!==0) ? data : '' }
      onChange={(e) => onChange(row,column,e.target.value.slice(-1))}
    />
  </div>
);

export default Cell;
