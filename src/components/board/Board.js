import React from 'react';
import { emptyBoard, solveSudoku } from '../../lib';
import Row from './row/Row';

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      board: [
        [5,1,7,6,0,0,0,3,4],
        [2,8,9,0,0,4,0,0,0],
        [3,4,6,2,0,5,0,9,0],
        [6,0,2,0,0,0,0,1,0],
        [0,3,8,0,0,6,0,4,7],
        [0,0,0,0,0,0,0,0,0],
        [0,9,0,0,0,0,0,7,8],
        [7,0,3,4,0,0,5,6,0],
        [0,0,0,0,0,0,0,0,0],
      ]
    };
    // setTimeout( () => {
    //   console.log("solving");
    //   this.setState(solveSudoku(this.state.board));
    // },5000);
  }

  render() {
    return(
      <div className="sudoku-board">
        {this.state.board.map( (row,index) => (
          <Row row={row} />
        ))}
      </div>
    );
  }
}

export default Board;
