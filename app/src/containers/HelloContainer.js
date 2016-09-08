import { connect } from 'react-redux';
import { helloWorld } from './../actions';
import Hello from './../components/Hello';

const mapStateToProps = state => {
  return {
    message: state.helloWorld.message
  };
};

const HelloContainer = connect(
  mapStateToProps,
  {helloWorld}
)(Hello);

export default HelloContainer;
