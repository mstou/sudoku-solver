import { connect } from 'react-redux';
import { clearBoard, solveBoard } from '../actions';
import { Buttons } from '../components';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  onSolveClick: () => dispatch(solveBoard()),
  onClearClick: () => dispatch(clearBoard())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons);
