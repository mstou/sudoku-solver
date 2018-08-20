import { emptyBoard, updateCell, solveSudoku, cellsValidation, boardValidation } from '../lib';

const initialState = Object.freeze({
  board: emptyBoard(),
  isCellValid: emptyBoard(true),
  preSelected: emptyBoard(false),
  isBoardValid: true,
  solved: false
});

const sudokuReducer = (state = initialState, action = {}) => {
  switch(action.type){

    case 'CHANGE_CELL':
      const {row,column,input} = action.payload;
      if(state.solved){
        return state;
      }

      if(input===' ' || input==='' || isNaN(input)){

        const newBoard = updateCell(state.board,row,column,0);
        const newValidationBoard = cellsValidation(newBoard);

        return Object.freeze({
          ...state,
          board: newBoard,
          isCellValid: newValidationBoard,
          preSelected: updateCell(state.preSelected,row,column,false),
          isBoardValid: boardValidation(newValidationBoard)
        });
      }

      else {
        const newBoard = updateCell(state.board,row,column,parseInt(input,10));
        const newValidationBoard = cellsValidation(newBoard);

        return Object.freeze({
          ...state,
          board: newBoard,
          isCellValid: newValidationBoard,
          preSelected: updateCell(state.preSelected,row,column,true),
          isBoardValid: boardValidation(newValidationBoard)
        });
      }


    case 'SOLVE_BOARD':

      return Object.freeze({
        ...state,
        board: solveSudoku(state.board).board,
        solved: true
      });


    case 'CLEAR_BOARD':
      return initialState;


    case 'SOLVE_INVALID_BOARD':
      return state;


    default:
      return state;
  }
}

export { sudokuReducer };
