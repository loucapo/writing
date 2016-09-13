import { connect } from 'react-redux';
import { helloAction } from './../actions';
import Hello from './../components/Hello';

const mapStateToProps = state => {
  console.log(state);
  return {
    message: state.message
  };
};

const HelloContainer = connect(
  mapStateToProps,
  {helloAction}
)(Hello);

export default HelloContainer;
