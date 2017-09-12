import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';
import { MLEditor, MLAccordion, MLButton, MLDialog } from '../../MLComponents/index';
import { CompositionDraftDetailsHeader, CompositionDraftDetailsRubric } from '../index';
import { DraftInstructionsDisplay, DraftGoalsDisplay } from '../../Draft/index';
import { ReflectionQuestionsDisplay } from '../../ReflectionQuestions/index';
import styles from './compositionDraftDetails.css';

class CompositionDraftDetails extends Component {
  state = {
    showDialog: false
  };

  checkForUnsavedChanges = (route) => {
    if (this.props.unsavedChanges) {
      this.setState({
        showDialog: true,
        navigateTo: route
      });
    } else {
      browserHistory.push(route);
    }
  };

  navigateToActivitySummary = () => {
    this.checkForUnsavedChanges(this.props.homeRoute);
  }

  navigateToPreviousDraft = () => {
    const lastDraftId = this.props.lastDraftWithFeedback.studentInfo.studentDraftId;
    const currentDraftId = this.props.draft.draftId;
    const link = `/studentDraft/${lastDraftId}/feedbackdisplay?fromDraftId=${currentDraftId}`;
    this.checkForUnsavedChanges(link);
  }

  closeDialog = () => {
    this.setState({
      showDialog: false
    });
  };

  DraftAccordionList = (
    <div className={styles.accordionLeftBorder} data-id="draft-information-details-panel">
      <DraftInstructionsDisplay instructions={this.props.draft && this.props.draft.instructions} />

      <DraftGoalsDisplay goals={this.props.goals} />

      <ReflectionQuestionsDisplay reflectionQuestions={this.props.reflectionQuestions} />
    </div>
  );

  detailsAccordionList = [
    {
      title: 'Draft',
      content: this.DraftAccordionList,
      dataId: 'draft-activity-detail-panel'
    },
    {
      title: 'Activity Prompt',
      content: (
        <div data-id="activity-prompt-content-detail-panel">
          <MLEditor content={this.props.activity.prompt} editable={false} />
        </div>
      ),
      dataId: 'activity-prompt-detail-panel'
    },
    {
      title: 'Final Rubric',
      content: <CompositionDraftDetailsRubric rubric={this.props.newRubric} />,
      dataId: 'final-rubric-detail-panel'
    }
  ];

  render() {
    return (
      <div>
        <CompositionDraftDetailsHeader />
        <div className={styles.navigationButton} data-id="details-panel-activity-link-div">
          <span onClick={this.navigateToActivitySummary} className={styles.link}>View Activity Summary</span>
        </div>
        {this.props.lastDraftWithFeedback ?
          (
            <div className={`${styles.navigationButton} ${styles.previousDraft}`} data-id="details-panel-previous-draft-link-div">
              <span onClick={this.navigateToPreviousDraft} className={styles.link}>
                {this.props.lastDraftWithFeedback.studentInfo.buttonText}
              </span>
            </div>
          ) : null
        }
        <div className="spacer">
          <MLDialog
            title={'Do you want to leave this page?'}
            message={
              'Any unsaved work will be lost if you leave the page. Stay on the page and use the save button to save your work.'
            }
            show={this.state.showDialog}
            close={this.closeDialog.bind(this)}
          >
            <MLButton
              title="Leave"
              bordered={true}
              color="red"
              dataId="details-panel-activity-link-dialog-leave"
              link={this.state.navigateTo}
            />
            <MLButton
              title="Stay"
              handleClick={this.closeDialog.bind(this)}
              dataId="details-panel-activity-link-dialog-stay"
            />
          </MLDialog>
        </div>
        <h3 className={styles.actHeader}>Activity Details</h3>
        <MLAccordion list={this.detailsAccordionList} />
      </div>
    );
  }
}

CompositionDraftDetails.propTypes = {
  activity: PropTypes.object,
  draft: PropTypes.object,
  goals: PropTypes.array,
  reflectionQuestions: PropTypes.array,
  newRubric: PropTypes.object,
  lastDraftWithFeedback: PropTypes.object,
  homeRoute: PropTypes.string,
  unsavedChanges: PropTypes.bool
};

export default CompositionDraftDetails;
