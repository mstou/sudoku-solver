import { emptyBoard, isNumberValid, updateCell, solveSudoku } from '../lib';

const initialState = Object.freeze({
  board: emptyBoard(),
  isBoardValid: true
});

const sudokuReducer = (state = initialState, action = {}) => {
  switch(action.type){

    case 'CHANGE_CELL':
      const {row,column,input} = action.payload;
      if(input===' ' || input==='' || isNaN(input)){
        return Object.freeze({
          ...state,
          board: updateCell(state.board,row,column,0)
        });
      }
      else {
        const validChange = isNumberValid(state.board,row,column,parseInt(input,10));
        return Object.freeze({
          ...state,
          board: updateCell(state.board,row,column,parseInt(input,10)),
          isBoardValid: state.isBoardValid && validChange
        });
      }

    case 'SOLVE_BOARD':
      return Object.freeze({
        ...state,
        board: solveSudoku(state.board).board
      });

    case 'CLEAR_BOARD':
      return initialState;

    default:
      return state;
  }
}

export { sudokuReducer };
