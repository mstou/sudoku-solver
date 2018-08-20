import { connect } from 'react-redux';
import { Board } from '../components';
import { changeCell } from '../actions';

const mapStateToProps = (state) => ({
  board: state.board,
  valid: state.isCellValid,
  preSelected: state.preSelected,
  solved: state.solved
});

const mapDispatchToProps = (dispatch) => ({
  onCellChange: (row,column,input) => dispatch(changeCell(row,column,input))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
