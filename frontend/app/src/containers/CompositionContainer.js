import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Composition } from '../components/Composition';
import { getOrCreateStudentDraft, updateDraftPaper } from '../modules/studentDraftModule';
import { getReflectionAnswers } from '../modules/reflectionAnswersModule';
import { getStudentActivityByActivityId } from '../modules/studentActivityModule';

class CompositionContainer extends Component {
  componentWillMount() {
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }

  loadData() {
    if (!this.props.studentActivityId) {
      this.props.getStudentActivityByActivityId(this.props.params.activityId);
    } else {
      if (!this.props.studentDraft || this.props.studentDraft.draftId !== this.props.params.draftId) {
        this.props.getOrCreateStudentDraft(this.props.studentActivityId, this.props.params.draftId);
      } else {
        this.props.getReflectionAnswers(this.props.studentDraft.studentDraftId);
      }
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
  getStudentActivityByActivityId: PropTypes.func,
  getReflectionAnswers: PropTypes.func,
  getOrCreateStudentDraft: PropTypes.func
};

const mapStateToProps = (state, props) => {
  const studentActivityId = state.studentActivities[0] && state.studentActivities[0].studentActivityId;
  const studentDraft = state.studentDraft[0];
  const hasStartedReflectionQuestions =
    studentDraft && !!state.reflectionAnswers.some(answer => answer.studentDraftId === studentDraft.studentDraftId);

  return {
    studentDraft,
    activityId: props.params.activityId,
    studentActivityId,
    hasStartedReflectionQuestions,
    saveDraftMessage: state.messaging.saveDraft
  };
};

export default connect(mapStateToProps, {
  getStudentActivityByActivityId,
  getReflectionAnswers,
  getOrCreateStudentDraft,
  updateDraftPaper
})(CompositionContainer);
