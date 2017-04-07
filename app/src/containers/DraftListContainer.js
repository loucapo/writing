import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchDraftsForActivity } from './../modules/draftModule';
import DraftList from '../components/Activity/DraftList/DraftList';

class DraftListContainer extends Component {
  componentWillMount() {
    this.props.fetchDraftsForActivity(this.props.activityId);
  }

  render() {
    return (<DraftList {...this.props} />);
  }
}

DraftListContainer.propTypes = {
  activityId: PropTypes.string,
  fetchDraftsForActivity: PropTypes.func
};

const mapStateToProps = (state, props) => {
  const role = state.auth.role;
  const drafts = state.drafts.filter(x => x.activityId === props.activityId);
  return {
    role,
    drafts
  };
};

export default connect(mapStateToProps, {fetchDraftsForActivity})(DraftListContainer);


