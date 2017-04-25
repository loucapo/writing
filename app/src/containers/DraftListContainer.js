import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getDraftsForActivity,
  addDraftToActivity,
  removeDraftFromActivity,
  updateDraftInstructions} from './../modules/draftModule';
import DraftList from '../components/Activity/DraftList/DraftList';

class DraftListContainer extends Component {
  componentWillMount() {
    this.props.getDraftsForActivity(this.props.activityId);
  }

  render() {
    return (<DraftList {...this.props} />);
  }
}

DraftListContainer.propTypes = {
  activityId: PropTypes.string,
  getDraftsForActivity: PropTypes.func
};

const mapStateToProps = (state, props) => {
  const role = state.auth.role;
  const drafts = state.drafts.filter(x => x.activityId === props.activityId);
  const draftsWithGoals = drafts.map(x => {
    if (!x.goals) {return x;}
    const goals = x.goals.map(y => state.criteria.find(z => z.id === y).title);
    return {...x, goals};
  }).sort((a, b) => a.index - b.index );

  return {
    role,
    activityId: props.activityId,
    drafts: draftsWithGoals
  };
};

export default connect(mapStateToProps, {
  getDraftsForActivity,
  addDraftToActivity,
  removeDraftFromActivity,
  updateDraftInstructions})(DraftListContainer);
