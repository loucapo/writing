import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Composition } from '../components/Composition';
import { getStudentDraft, createStudentDraftIfNotThere, updateDraftPaper } from '../modules/studentDraftModule';
import { getReflectionAnswers } from '../modules/reflectionAnswersModule';

class CompositionContainer extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData() {
    if (!this.props.studentDraft) {
      this.props.createStudentDraftIfNotThere(this.props.studentActivityId, this.props.params.draftId);
      // put in subsequentAction for action creator;
      this.props.getStudentDraft(this.props.studentActivityId, this.props.params.draftId);
    } else {
      this.props.getReflectionAnswers(this.props.studentDraft.studentDraftId);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.studentDraft && newProps.studentDraft !== this.props.studentDraft) {
      this.props.getReflectionAnswers(newProps.studentDraft.studentDraftId);
    }
  }

  render() {
    return this.props.studentDraft ? <Composition {...this.props} /> : null;
  }
}

CompositionContainer.propTypes = {
  getStudentDraft: PropTypes.func,
  studentDraft: PropTypes.object,
  params: PropTypes.object,
  studentActivityId: PropTypes.string,
  activityId: PropTypes.string,
  getReflectionAnswers: PropTypes.func,
  createStudentDraftIfNotThere: PropTypes.func
};

const mapStateToProps = (state, props) => {
  const studentDraft = state.studentDraft.find(x => x.draftId === props.params.draftId);
  const studentActivity = state.studentActivities.find(x => x.activityId === props.params.activityId);
  const hasStartedReflectionQuestions =
    studentDraft && !!state.reflectionAnswers.some(x => x.studentDraftId === studentDraft.studentDraftId);

  return {
    studentDraft,
    activityId: props.params.activityId,
    studentActivityId: studentActivity.studentActivityId.trim(),
    hasStartedReflectionQuestions,
    saveDraftMessage: state.messaging.saveDraft
  };
};

export default connect(mapStateToProps, {
  getStudentDraft,
  getReflectionAnswers,
  createStudentDraftIfNotThere,
  updateDraftPaper
})(CompositionContainer);
