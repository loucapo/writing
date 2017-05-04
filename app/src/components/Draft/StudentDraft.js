import React, {PropTypes} from 'react';
import MLEditor from './../MLEditor/MLEditor';
import Header from './Header/Header';

import styles from './draft.css';

const StudentDraft = ({studentDraft}) => {
  const handleSave = () => {
    //
  };

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.container}>
        <MLEditor
          handleSave={handleSave}
          content={studentDraft}
          editable={true}
          toolbarHidden
        />
      </div>
    </div>
  );
};

StudentDraft.propTypes = {
  studentDraft: PropTypes.object
};

export default StudentDraft;
