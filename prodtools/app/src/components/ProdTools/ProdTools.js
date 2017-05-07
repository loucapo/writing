import React, {PropTypes} from 'react';
import CriteriaContainer from 'Containers/CriteriaContainer';
import QuickFeedback from '../QuickFeedback/QuickFeedback';
import MLHeader from '../MLHeader/MLHeader';
import MLMenu from '../MLMenu/MLMenu';

import styles from './prodTools.css';

let tabs = [
  {
    title: 'Criteria',
    content: <CriteriaContainer />
  },
  {
    title: 'Rubrics',
    content: <div>tab 2 content</div>
  },
  {
    title: 'Quick Feedback',
    content: <QuickFeedback />
  },
  {
    title: 'Student Reflection Questions',
    content: <div>tab 4 content</div>
  }
];

const ProdTools = () => {
  return (
    <div>
      <MLHeader />

      <div data-id="prod-tools-title" className={styles.spacer}>
        Writing Tools Content Admin
      </div>

      <MLMenu tabs={tabs} />
    </div>
  );
};

ProdTools.propTypes = {
  role: PropTypes.string
};

export default ProdTools;
