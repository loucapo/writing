import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { activityAction } from './../modules';
import Activity from '../components/Activity/Activity';
import { withRouter } from 'react-router';

class ActivityContainer extends Component {
  componentDidMount() { this.loadData(); }

  // XXX this componentDidUpdate() was causing inifinte loop, since we aren't updating yet this deferred but will
  // bee needed next sprint probably
  // this causes infinte loop for some reason
  // componentDidUpdate() { this.loadData(); }

  loadData() { this.props.activityAction(this.props.params.id); }

  render() {
    if (this.props.isFetching) {
      return (<p style={{ 'padding-top': '100px' }}> Loading... </p>);
    }
    if (this.props.errorMessage) {
      return (<p style={{ 'padding-top': '100px' }}>ERROR! -> {this.props.errorMessage}</p>);
    }
    return (<Activity{...this.props} />);
  }
}

ActivityContainer.propTypes = {
  url: PropTypes.string,
  id: PropTypes.string,
  isFetching: PropTypes.string,
  errorMessage: PropTypes.string,
  activityAction: PropTypes.func,
  params: PropTypes.object

};

const mapStateToProps = (state, props) => {
  const activity = state.activities.filter(x => x.id === props.params.id)[0];
  if (!activity) {
    return {};
  }
  const drafts = activity.drafts.map(x => state.drafts.filter(d => d.id === x)[0]);
  return {
    activity,
    drafts
  };
};

export default withRouter(connect(mapStateToProps, {activityAction})(ActivityContainer));


