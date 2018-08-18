import { emptyBoard, isNumberValid, updateCell, solveSudoku } from '../lib';

const initialState = Object.freeze({
  board: emptyBoard(),
  isBoardValid: true
});

const sudokuReducer = (state = initialState, action = {}) => {
  switch(action.type){

    case 'CHANGE_CELL':
      const {row,column,input} = action.payload;
      if(input==' '){
        return Object.freeze({
          ...state,
          board: updateCell(state.board,row,index,0)
        });
      }
      else {
        const validChange = isNumberValid(state.board,row,index,parseInt(input));
        return Object.freeze({
          ...state,
          board: updateCell(state.board,row,index,parseInt(input)),
          isBoardValid: state.isBoardValid && validChange
        });
      }

    case 'SOLVE_BOARD':
      return Object.freeze({
        ...state,
        board: solveSudoku(state.board)
      });

    case 'CLEAR_BOARD':
      return initialState;

    default:
      return state;
  }
}

export { sudokuReducer };
