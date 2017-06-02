import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Composition } from './../components/Composition/index';
import {getStudentDraft, createStudentDraftIfNotThere, updateDraftPaper} from './../modules/studentDraftModule';

class CompositionContainer extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData() {
    if (!this.props.studentDraft) {
      this.props.createStudentDraftIfNotThere(
        this.props.studentActivityId,
        this.props.params.draftId
      );
      // put in subsequentAction for action creator;
      this.props.getStudentDraft(
        this.props.studentActivityId,
        this.props.params.draftId
      );
    }
  }

  render() {
    return this.props.studentDraft ? (<Composition {...this.props} />) : null;
  }
}

CompositionContainer.propTypes = {
  getStudentDraft: PropTypes.func,
  studentDraft: PropTypes.object,
  params: PropTypes.object,
  studentActivityId: PropTypes.string,
  activityId: PropTypes.string,
  createStudentDraftIfNotThere: PropTypes.func
};

const mapStateToProps = (state, props) => {
  const studentDraft = state.studentDraft.find(x => x.draftId === props.params.draftId);
  const studentActivity = state.studentActivities.find(x => x.activityId === props.params.activityId);
  return {
    studentDraft,
    activityId: props.params.activityId,
    studentActivityId: studentActivity.studentActivityId.trim()
  };
};

export default connect(mapStateToProps, {
  getStudentDraft,
  createStudentDraftIfNotThere,
  updateDraftPaper
})(CompositionContainer);

