import React from 'react';

const computeClassName = (row,column) => {
  let className = '';
  if( column===2 || column===5 ){
    className += 'borderRight';
  }
  if( row===2 || row===5 ){
    if(className!==''){
      className +=' ';
    }
    className += 'borderBottom';
  }
  return className;
}

const Cell = ({data, row, column, onChange}) => (
  <div className={`sudoku-cell ${computeClassName(row,column)}`}>
    <input
      value={(data!==0) ? data : '' }
      onChange={(e) => onChange(row,column,e.target.value.slice(-1))}
    />
  </div>
);

export default Cell;
