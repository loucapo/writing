import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import _ from 'lodash';
import { MLCard, MLDialog, MLButton } from '../../MLComponents';
import { FeedbackToolHeader, EndComment, FinalGrade } from '../index';
import { FeedbackEditorContainer, RubricContainer } from '../../../containers';
import { reflectionQuestionsConfig } from '../../../utilities/reflectionQuestions';
import styles from './feedbackTool.css';

class FeedbackTool extends Component {
  state = {
    unsavedChanges: false,
    showSaveDialog: false
  };

  setUnsavedChanges = (hasUnsavedChanges) => {
    this.setState({
      unsavedChanges: hasUnsavedChanges
    });
  };

  checkUnsavedChanges = () => {
    if (!this.state.unsavedChanges) {
      browserHistory.push(`${this.props.homeRoute}?currentDraft=${this.props.draft.draftId}`);
    } else {
      this.setState({
        showSaveDialog: true
      });
    }
  };

  closeDialog = () => {
    this.setState({
      showSaveDialog: false
    });
  };

  render() {
    return (
      <div className={styles.page}>
        <MLDialog
          title={'Do you want to leave this page?'}
          message={
            'Any unsaved work will be lost if you leave the page. Stay on the page and use the save button to save your work.'
          }
          show={this.state.showSaveDialog}
          close={this.closeDialog.bind(this)}
        >
          <MLButton
            title="Leave"
            bordered={true}
            color="red"
            dataId="details-panel-activity-link-dialog-leave"
            link={`${this.props.homeRoute}?currentDraft=${this.props.draft && this.props.draft.draftId}`}
          />
          <MLButton
            title="Stay"
            handleClick={this.closeDialog.bind(this)}
            dataId="details-panel-activity-link-dialog-stay"
          />
        </MLDialog>
        <FeedbackToolHeader
          homeRoute={this.props.homeRoute}
          draftId={this.props.draft && this.props.draft.draftId}
          draftTitle={this.props.draftTitle}
          submittedDate={this.props.studentDraft.submittedAt}
          checkUnsavedChanges={this.checkUnsavedChanges}
        />
        <div className={styles.container}>
          <MLCard type="reflection" title="Reflection">
            <div>
              {this.props.reflectionQuestions.map(reflection => {
                const reflectionText = reflection.questionType === 'agree/disagree' && _.get(_.find(reflectionQuestionsConfig.labels, {value: reflection.answer}), 'text');
                return (
                  <p key={reflection.questionId}>
                    <strong>{reflection.question}</strong><br />
                    {reflectionText || reflection.answer}
                  </p>
                );
              })}
            </div>
          </MLCard>
          <MLCard type="draft" title={this.props.draftTitle}>
            <FeedbackEditorContainer
              studentActivityId={this.props.studentDraft.studentActivityId}
              draft={this.props.draft}
              studentDraftId={this.props.studentDraft.studentDraftId}
              updateFeedbackPaper={this.props.updateFeedbackPaper}
              createFeedback={this.props.createFeedback}
              content={this.props.studentDraft.feedbackPaper}
              createFeedbackError={this.props.createFeedbackError}
              feedback={this.props.feedback}
            />
          </MLCard>
          {this.props.lastDraft ?
            <FinalGrade
              studentActivityId={this.props.studentDraft.studentActivityId}
              studentDraftId={this.props.studentDraft.studentDraftId}
              submitFinalGrade={this.props.submitFinalGrade}
              finalGrade={this.props.studentDraft.finalGrade}
              setUnsavedChanges={this.setUnsavedChanges}
            />
            : null
          }
          <MLCard type="end-comment" title="End Comment (optional)">
            <EndComment
              studentActivityId={this.props.studentDraft.studentActivityId}
              studentDraftId={this.props.studentDraft.studentDraftId}
              submitEndComment={this.props.submitEndComment}
              endComment={this.props.studentDraft.endComment}
              setUnsavedChanges={this.setUnsavedChanges}
            />
          </MLCard>
          {(!this.props.rubricIsEmpty && this.props.lastDraft) ?
            <MLCard type="rubric" title="Final Rubric Evaluation">
              <RubricContainer
                studentActivityId={this.props.studentDraft.studentActivityId}
                studentDraftId={this.props.studentDraft.studentDraftId}
                setUnsavedChanges={this.setUnsavedChanges}
              />
            </MLCard>
            : null
          }
        </div>
      </div>
    );
  }
}

FeedbackTool.propTypes = {
  studentDraft: PropTypes.object,
  homeRoute: PropTypes.string,
  reflectionQuestions: PropTypes.array,
  draft: PropTypes.object,
  draftTitle: PropTypes.string,
  submitEndComment: PropTypes.func,
  submitFinalGrade: PropTypes.func,
  rubricIsEmpty: PropTypes.bool,
  lastDraft: PropTypes.bool,
  updateFeedbackPaper: PropTypes.func,
  createFeedback: PropTypes.func,
  createFeedbackError: PropTypes.object,
  feedback: PropTypes.array
};

export default FeedbackTool;
