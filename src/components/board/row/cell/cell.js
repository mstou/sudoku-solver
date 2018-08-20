import React from 'react';

const computeClassName = (row,column,cellValid,preSelected,solved) => {
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
  if(preSelected && solved){
    if(className!==''){
      className +=' ';
    }
    className += 'preSelected';
  }
  if( !cellValid ){
    if(className!==''){
      className +=' ';
    }
    className += 'notValidCell';
  }
  return className;
}

const Cell = ({data, row, column, cellValid, preSelected, solved, onChange}) => (
  <div className={`sudoku-cell ${computeClassName(row,column,cellValid,preSelected,solved)}`}>
    <input
      value={(data!==0) ? data : '' }
      onChange={(e) => onChange(row,column,e.target.value.slice(-1))}
    />
  </div>
);

export default Cell;
