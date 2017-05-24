import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import MLEditor from '../../MLEditor/MLEditor';
import DetailsPanelHeader
  from './DraftDetailsPanelHeader/DraftDetailsPanelHeader';
import MLAccordion from '../../MLAccordion/MLAccordion';
import DraftInstructionsDisplay
  from '../../Activity/DraftList/Draft/DraftInstructionsForm/DraftInstructionsDisplay';
import DraftGoalsDisplay
  from '../../Activity/DraftList/Draft/DraftGoals/DraftGoalsDisplay';
import StudentReflectionQuestionsDisplay
  from '../../Activity/DraftList/Draft/StudentReflectionQuestions/StudentReflectionQuestionsDisplay';
import Rubric from './Rubric/Rubric';

import styles from './DraftDetailsPanel.css';

const DraftDetailsPanel = ({
  activity,
  draft,
  goals,
  studentReflectionQuestions,
  newRubric
}) => {
  const DraftAccordionList = (
    <div
      className={styles.accordionLeftBorder}
      data-id="draft-information-details-panel"
    >
      <DraftInstructionsDisplay instructions={draft && draft.instructions} />
      <div className={styles.listSpacer} />
      <DraftGoalsDisplay goals={goals} />
      <StudentReflectionQuestionsDisplay
        questions={studentReflectionQuestions}
      />
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
      <DetailsPanelHeader />
      <div
        className={styles.actSummary}
        data-id="details-panel-activity-link-div"
      >
        <Link
          to={`/lms/9a04ca89-fake-4180-guid-155bcb2c106e/course/${activity.courseId}/resource/${activity.activityId}`}
          data-id="details-panel-activity-link"
          className={styles.activityLink}
        >
          View Activity Summary
        </Link>
      </div>
      <h3 className={styles.actHeader}>Activity Details</h3>
      <MLAccordion list={detailsAccordionList} />
    </div>
  );
};

DraftDetailsPanel.propTypes = {
  activity: PropTypes.object,
  draft: PropTypes.object,
  goals: PropTypes.array,
  studentReflectionQuestions: PropTypes.array,
  newRubric: PropTypes.object
};

export default DraftDetailsPanel;
