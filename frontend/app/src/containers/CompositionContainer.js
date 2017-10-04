import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Composition } from '../components/Composition';
import { getOrCreateStudentDraft, updateDraftPaper } from '../modules/studentDraftModule';
import { getReflectionAnswers } from '../modules/reflectionAnswersModule';

class CompositionContainer extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData() {
    this.props.getOrCreateStudentDraft(this.props.studentActivityId, this.props.params.draftId);
    if (this.props.studentDraft) {
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
  studentDraft: PropTypes.object,
  params: PropTypes.object,
  studentActivityId: PropTypes.string,
  activityId: PropTypes.string,
  getReflectionAnswers: PropTypes.func,
  getOrCreateStudentDraft: PropTypes.func
};

const mapStateToProps = (state, props) => {
  const studentDraft = state.studentDraft[0];
  const studentActivity = state.studentActivities[0];
  const hasStartedReflectionQuestions =
    studentDraft && !!state.reflectionAnswers.some(answer => answer.studentDraftId === studentDraft.studentDraftId);

  return {
    studentDraft,
    activityId: props.params.activityId,
    studentActivityId: studentActivity.studentActivityId,
    hasStartedReflectionQuestions,
    saveDraftMessage: state.messaging.saveDraft
  };
};

export default connect(mapStateToProps, {
  getReflectionAnswers,
  getOrCreateStudentDraft,
  updateDraftPaper
})(CompositionContainer);
