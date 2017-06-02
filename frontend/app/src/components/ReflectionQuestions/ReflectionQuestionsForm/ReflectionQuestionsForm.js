import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  MLDialog,
  MLButton
} from './../../MLComponents';

import { ReflectionQuestionsFormHeader } from './../index';

import styles from './reflectionQuestionsForm.css';

class ReflectionQuestionsForm extends Component {
  state = {
    answers: this.props.reflectionAnswers || [],
    showSubmitConfirm: false
  };

  componentWillReceiveProps = (newProps, oldProps) => {
    if(newProps.reflectionAnswers !== oldProps.reflectionAnswers) {
      this.setState({answers: newProps.reflectionAnswers});
    }
  };

  showDialog = () => {
    this.setState({
      showSubmitConfirm: true
    });
  };

  closeDialog = confirm => {
    let that = this;
    confirm = confirm || false;
    this.setState(
      {
        showSubmitConfirm: false
      },
      function submit() {
        if (confirm) {
          that.submitDraft();
        }
      }
    );
  };

  handleSave = () =>
    this.props.setReflectionAnswers(this.props.studentActivityId, this.props.studentDraftId, this.state.answers);

  handleSubmit = () => {
    this.handleSave();
    this.showDialog();
  };

  submitDraft = () => this.props.submitDraft(this.props.studentActivityId,
    this.props.studentDraftId,
    this.props.homeRoute);

  handleChange = (reflectionId, value) => {
    let answers = [...this.state.answers];
    const answer = {
      studentReflectionQuestionId: reflectionId,
      studentReflectionAnswer: value
    };

    if(!this.state.answers.find(x => x.studentReflectionQuestionId === reflectionId)) {
      answers.push(answer);
    } else {
      answers = answers.map(x =>
        x.studentReflectionQuestionId === reflectionId
          ? answer
          : x);
    }
    this.setState({answers});
  };

  checkIfQuestionsAreCompleted = () => {
    return this.props.reflectionQuestions.every(x => {
      let item = this.state.answers.find(y => x.studentReflectionQuestionId === y.studentReflectionQuestionId);
      return item && item.studentReflectionAnswer;
    });
  };

  renderAnswerSpace = (question) => {
    const answerObj = this.state.answers
      .find(x => question.studentReflectionQuestionId === x.studentReflectionQuestionId);
    const answer = answerObj ? answerObj.studentReflectionAnswer : undefined;
    return question.questionType === 'free'
      ? this.renderTextArea(question.studentReflectionQuestionId, answer)
      : this.renderPoll(question.studentReflectionQuestionId, answer);
  };

  renderPoll = (questionId, value) => (
    <form onChange={x => this.handleChange(questionId, x.target.value)}>
      <input type="radio" name="poll" value="stronglyAgree" checked={value === 'stronglyAgree'} />Strongly Agree<br />
      <input type="radio" name="poll" value="agree" checked={value === 'agree'} /> Agree<br />
      <input type="radio" name="poll" value="undecided" checked={value === 'undecided'} /> Undecided/Neutral<br />
      <input type="radio" name="poll" value="disagree" checked={value === 'disagree'} /> Disagree<br />
      <input
        type="radio"
        name="poll"
        value="stronglyDisagree"
        checked={value === 'stronglyDisagree'} /> Strongly Disagree
    </form>
  );

  renderTextArea = (questionId, value) => {

    return (<textarea onChange={x =>
      this.handleChange(questionId, x.target.value)}
      value={value}
    />);
  };

  render() {
    return (
      <div className={styles.page}>
        <ReflectionQuestionsFormHeader
          questionsAreComplete={this.checkIfQuestionsAreCompleted()}
          handleSave={this.handleSave}
          handleSubmit={this.handleSubmit} />
        <div className={styles.container}>
          <h3>Reflection Questions</h3>
          <sup>All questions are required</sup>
          {
            this.props.reflectionQuestions.map((reflection, idx) => (
              <div className={styles.reflection} key={reflection.studentReflectionQuestionId}>
                <p>{`${idx + 1}. ${reflection.question}`}</p>
                {this.renderAnswerSpace(reflection)}
              </div>
              )
            )
          }
        </div>
        <MLDialog
          title={'Ready to submit draft and reflections questions'}
          message={'If you submit, no further changes can be made.'}
          show={this.state.showSubmitConfirm}
        >
          <MLButton
            title="Cancel"
            bordered={true}
            color="red"
            dataId="dialog-cancel"
            handleClick={this.closeDialog.bind(this, false)}
          />
          <MLButton
            title="Submit"
            handleClick={this.closeDialog.bind(this, true)}
            dataId="dialog-submit"
          />
        </MLDialog>
      </div>
    );
  }
}

ReflectionQuestionsForm.propTypes = {
  reflectionQuestions: PropTypes.array,
  reflectionAnswers: PropTypes.array,
  setReflectionAnswers: PropTypes.func,
  studentActivityId: PropTypes.string,
  studentDraftId: PropTypes.string,
  submitDraft: PropTypes.func,
  homeRoute: PropTypes.string
};

export default ReflectionQuestionsForm;
