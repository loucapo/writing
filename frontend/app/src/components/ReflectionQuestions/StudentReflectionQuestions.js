import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MLDialog from '../MLDialog/MLDialog';
import MLButton from '../MLButton/MLButton';
import Header from './Header/Header';

import styles from './studentReflectionQuestions.css';

class StudentReflectionQuestions extends Component {
  state = {
    answers: this.props.studentReflectionAnswers || [],
    showSubmitConfirm: false
  };

  componentWillReceiveProps = (newProps, oldProps) => {
    if(newProps.studentReflectionAnswers !== oldProps.studentReflectionAnswers) {
      this.setState({answers: newProps.studentReflectionAnswers});
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
          that.handleSubmit();
        }
      }
    );
  };

  handleSave = () =>
    this.props.setStudentReflectionAnswers(this.props.studentActivityId, this.props.studentDraftId, this.state.answers);

  handleSubmit = () => {
    this.props.setStudentReflectionAnswers(this.props.studentActivityId, this.props.studentDraftId, this.state.answers);
    // do popup
    this.props.submitDraft(this.props.studentActivityId,
      this.props.studentDraftId,
      this.props.homeRoute);
  };

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
    return this.props.studentReflectionQuestions.every(x => {
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
        <Header
          questionsAreComplete={this.checkIfQuestionsAreCompleted()}
          handleSave={this.handleSave}
          handleSubmit={this.showDialog} />
        <div className={styles.container}>
          <h3>Reflection Questions</h3>
          <sup>All questions are required</sup>
          {
            this.props.studentReflectionQuestions.map((reflection, idx) => (
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

StudentReflectionQuestions.propTypes = {
  studentReflectionQuestions: PropTypes.array,
  studentReflectionAnswers: PropTypes.array,
  setStudentReflectionAnswers: PropTypes.func,
  studentActivityId: PropTypes.string,
  studentDraftId: PropTypes.string,
  submitDraft: PropTypes.func,
  homeRoute: PropTypes.string
};

export default StudentReflectionQuestions;
