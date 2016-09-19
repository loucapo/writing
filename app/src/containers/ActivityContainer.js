import { connect } from 'react-redux';
import { activityAction } from './../modules';
import App from '../views/App/App';

const mapStateToProps = state => {
  return {
    message: state.hello
  };
};

const ActivityContainer = connect(
  mapStateToProps,
  {activityAction}
)(App);

export default ActivityContainer;
