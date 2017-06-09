import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import {
  MLEditor,
  MLAccordion
} from './../../MLComponents/index';

import {
  CompositionDraftDetailsHeader
} from './../index';

import {
  DraftInstructionsDisplay,
  DraftGoalsDisplay
} from './../../Draft/index';

import { ReflectionQuestionsDisplay } from './../../ReflectionQuestions/index';

import { Rubric } from './../../Rubric/index';

import styles from './compositionDraftDetails.css';

const CompositionDraftDetails = ({
  activity,
  draft,
  goals,
  reflectionQuestions,
  newRubric,
  homeRoute
}) => {
  const DraftAccordionList = (
    <div className={styles.accordionLeftBorder} data-id="draft-information-details-panel" >
      <DraftInstructionsDisplay instructions={draft && draft.instructions} />

      <DraftGoalsDisplay goals={goals} />

      <ReflectionQuestionsDisplay reflectionQuestions={reflectionQuestions} />
    </div>
  );

  const detailsAccordionList = [
    {
      title: 'Draft',
      content: DraftAccordionList,
      dataId: 'draft-activity-detail-panel'
    },
    {
      title: 'Activity Prompt',
      content: <div data-id="activity-prompt-content-detail-panel">
        <MLEditor content={activity.prompt} editable={false} />
      </div>,
      dataId: 'activity-prompt-detail-panel'
    },
    {
      title: 'Final Rubric',
      content: <Rubric rubric={newRubric} />,
      dataId: 'final-rubric-detail-panel'
    }
  ];

  // XXX Fake guid used below in <Link>
  // replace with real guid when Activity knows about LMS IDs
  return (
    <div>
      <CompositionDraftDetailsHeader />
      <div className={styles.actSummary} data-id="details-panel-activity-link-div" >
        <Link to={homeRoute} data-id="details-panel-activity-link" className={styles.activityLink} >
          View Activity Summary
        </Link>
      </div>
      <h3 className={styles.actHeader}>Activity Details</h3>
      <MLAccordion list={detailsAccordionList} />
    </div>
  );
};

CompositionDraftDetails.propTypes = {
  activity: PropTypes.object,
  draft: PropTypes.object,
  goals: PropTypes.array,
  reflectionQuestions: PropTypes.array,
  newRubric: PropTypes.object,
  homeRoute: PropTypes.string
};

export default CompositionDraftDetails;
