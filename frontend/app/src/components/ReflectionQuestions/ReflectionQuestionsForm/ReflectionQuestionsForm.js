import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MLDialog, MLButton, MLMessage } from '../../MLComponents';
import { ReflectionQuestionsFormHeader } from '../index';

import styles from './reflectionQuestionsForm.css';

class ReflectionQuestionsForm extends Component {
  state = {
    answers: this.props.reflectionAnswers || [],
    showSubmitConfirm: false
  };

  componentWillReceiveProps = newProps => {
    if (newProps.reflectionAnswers !== this.props.reflectionAnswers) {
      this.setState({ answers: newProps.reflectionAnswers });
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
    this.props.homeRoute,
    this.props.draftName);

  handleChange = (reflectionId, value) => {
    let answers = [...this.state.answers];
    const answer = {
      studentReflectionQuestionId: reflectionId,
      studentReflectionAnswer: value
    };

    if (!this.state.answers.find(x => x.studentReflectionQuestionId === reflectionId)) {
      answers.push(answer);
    } else {
      answers = answers.map(x => x.studentReflectionQuestionId === reflectionId ? answer : x);
    }
    this.setState({ answers });
  };

  checkIfQuestionsAreCompleted = () => {
    return this.props.reflectionQuestions.every(x => {
      let item = this.state.answers.find(y => x.studentReflectionQuestionId === y.studentReflectionQuestionId);
      return item && item.studentReflectionAnswer;
    });
  };

  renderAnswerSpace = question => {
    const answerObj = this.state.answers.find(
      x => question.studentReflectionQuestionId === x.studentReflectionQuestionId
    );
    const answer = answerObj ? answerObj.studentReflectionAnswer : undefined;
    return question.questionType === 'free'
      ? this.renderTextArea(question.studentReflectionQuestionId, answer)
      : this.renderPoll(question.studentReflectionQuestionId, answer);
  };

  renderPoll = (questionId, value) => {
    const labels = [
      { text: 'Strongly Agree', value: 'stronglyAgree' },
      { text: 'Agree', value: 'agree' },
      { text: 'Undecided/Neutral', value: 'undecided' },
      { text: 'Disagree', value: 'disagree' },
      { text: 'Strongly Disagree', value: 'stronglyDisagree' }
    ];

    return (
      <form onChange={x => this.handleChange(questionId, x.target.value)}>
        {labels.map((label, index) => (
          <div key={index}>
            <input type="radio" name="poll" value={label.value} checked={value === label.value} />
            <label htmlFor={label.value}>
              {label.text}
            </label><br />
          </div>
        ))}
      </form>
    );
  };

  renderTextArea = (questionId, value) => {
    return <textarea onChange={x => this.handleChange(questionId, x.target.value)} value={value} />;
  };

  renderSaveMessage = () => {
    const saveMessage = this.props.saveReflectionMessage;
    if (saveMessage && saveMessage.status) {
      return saveMessage.status === 'success' ?
        <MLMessage
          options={{
            id: '1234',
            message: `Your reflection questions were successfully saved on ${saveMessage.modified}`,
            type: 'success',
            icon: 'check'
          }}
        />
        :
        <MLMessage
          options={{
            id: '1234',
            message: 'There was a problem saving, please try again',
            type: 'error',
            icon: 'not'
          }}
        />;
    }
  };

  render() {
    return (
      <div className={styles.page}>
        <ReflectionQuestionsFormHeader
          questionsAreComplete={this.checkIfQuestionsAreCompleted()}
          handleSave={this.handleSave}
          handleSubmit={this.handleSubmit}
        />
        <div className={styles.container}>
          {this.renderSaveMessage()}
          <h3>Reflection Questions</h3>
          <sup>All questions are required</sup>
          {this.props.reflectionQuestions.map((reflection, idx) => (
            <div className={styles.reflection} key={reflection.studentReflectionQuestionId}>
              <p>{`${idx + 1}. ${reflection.question}`}</p>
              {this.renderAnswerSpace(reflection)}
            </div>
          ))}
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
          <MLButton title="Submit" handleClick={this.closeDialog.bind(this, true)} dataId="dialog-submit" />
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
  draftName: PropTypes.string,
  homeRoute: PropTypes.string,
  saveReflectionMessage: PropTypes.object
};

export default ReflectionQuestionsForm;
