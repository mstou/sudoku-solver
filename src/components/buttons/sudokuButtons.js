import React from 'react';

const Buttons = ({onSolveClick, onClearClick}) => (
  <div>
    <button className="SolveButton" onClick={onSolveClick}> Solve </button>
    <button className="ClearButton" onClick={onClearClick}> Clear </button>
  </div>
);

export default Buttons;
