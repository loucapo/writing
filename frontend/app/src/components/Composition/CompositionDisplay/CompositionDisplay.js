import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import moment from 'moment';
import { MLEditor, MLCard, MLMessage } from '../../MLComponents';
import { CompositionDisplayHeader } from '../index';
import { reflectionQuestionsConfig } from '../../../utilities/reflectionQuestions';
import styles from './compositionDisplay.css';

const CompositionDisplay = ({ studentDraft, reflectionQuestions, homeRoute, draftTitle }) => (
  <div className={styles.page}>
    <CompositionDisplayHeader homeRoute={homeRoute} />
    <div className={styles.container}>
      <div className={styles.alert} data-id="submitted-draft-alert">
        <MLMessage
          options={{
            id: '12345',
            message: `This draft was submitted successfully on ${moment(studentDraft.submittedDate).format('MMMM Do, YYYY')}`,
            type: 'success',
            icon: 'check'
          }}
        />
      </div>

      <MLCard type="draft" title={draftTitle}>
        <MLEditor content={studentDraft.paper} editable={false} toolbarHidden={true} />
      </MLCard>

      <MLCard type="reflection" title="Reflection">
        <div>
          {reflectionQuestions.map((reflection, index) => {
            const reflectionText = reflection.questionType === 'agree/disagree' && _.get(_.find(reflectionQuestionsConfig.labels, {value: reflection.answer}), 'text');
            return (
              <p key={index}>
                <strong>{reflection.question}</strong><br />
                {reflectionText || reflection.answer}
              </p>
            );
          })}
        </div>
      </MLCard>
    </div>
  </div>
);

CompositionDisplay.propTypes = {
  studentDraft: PropTypes.object,
  homeRoute: PropTypes.string,
  reflectionQuestions: PropTypes.array,
  draftTitle: PropTypes.string
};

export default CompositionDisplay;
