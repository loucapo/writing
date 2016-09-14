import { connect } from 'react-redux';
import { helloAction } from './../modules/helloModule';
import Hello from './../components/Hello';

const mapStateToProps = state => {
  console.log(state);
  return {
    message: state.hello
  };
};

const HelloContainer = connect(
  mapStateToProps,
  {helloAction}
)(Hello);

export default HelloContainer;
