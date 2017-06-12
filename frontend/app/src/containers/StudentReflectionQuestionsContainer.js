import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import StudentReflectionQuestions from '../components/ReflectionQuestions/StudentReflectionQuestions';
import {getReflectionAnswers, setReflectionAnswers} from '../modules/reflectionAnswersModule';
import { submitDraft } from '../modules/studentDraftModule';

class StudentReflectionQuestionsContainer extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData() {
    this.props.getReflectionAnswers(this.props.studentDraftId);
  }

  render() {
    return (<StudentReflectionQuestions {...this.props} />);
  }
}

StudentReflectionQuestionsContainer.propTypes = {
  studentReflectionQuestions: PropTypes.array,
  studentReflectionAnswers: PropTypes.array,
  setReflectionAnswers: PropTypes.func,
  getReflectionAnswers: PropTypes.func,
  studentActivityId: PropTypes.string,
  studentDraftId: PropTypes.string
};

const mapStateToProps = (state, props) => {
  let studentDraft = state.studentDraft.find(x=>x.studentDraftId === props.params.studentDraftId);
  let draft = state.drafts.find(x => x.draftId === studentDraft.draftId);
  let studentReflectionQuestions =
    draft.studentReflectionQuestions
      .map(x => state.studentReflectionQuestions.find(y => y.studentReflectionQuestionId === x));


  let studentReflectionAnswers = state.studentReflectionAnswers
    .filter(x => studentReflectionQuestions
      .find(y => y.studentReflectionQuestionId === x.studentReflectionQuestionId));
  return {
    studentReflectionQuestions,
    studentReflectionAnswers,
    studentActivityId: props.params.studentActivityId.trim(),
    studentDraftId: props.params.studentDraftId,
    homeRoute: state.defaults.homeRoute
  };
};

export default connect(mapStateToProps,
  {
    setReflectionAnswers,
    getReflectionAnswers,
    submitDraft
  })(StudentReflectionQuestionsContainer);
