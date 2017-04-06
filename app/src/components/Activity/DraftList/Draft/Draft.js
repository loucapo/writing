import React, {PropTypes} from 'react';
import MLIcon from 'ml-react-cdl-icons';
import MLDropdown from '../../../MLDropdown/MLDropdown';
import InstructorControlsContainer from '../../../InstructorControlsContainer/InstructorControlsContainer';

import styles from './draft.css';

const Draft = ({draft, role, openDraftFocusModal}) => {
  return (
    <div>
      <section className={styles.draftType}>
        <div data-id="review-type-dropdown" className={styles.draftTypeLeft}>
          <div className={styles.subheader}>Review Type</div>
          <MLDropdown title={draft && draft.type || 'Instructor Review'} />
        </div>
        <div data-id="grade-type-dropdown">
          <div className={styles.subheader}>Grade Type*</div>
          <MLDropdown title={draft && draft.gradeType || 'Select Grade Type'} />
        </div>
      </section>

      <section className={styles.draftDetails}>
        <div className={styles.draftDetailsLeft}>
          <h4 className={styles.flex}>
            <div className={styles.draftFocus}>
              Draft Focus
              <span data-id="draft-focus-help">
                <MLIcon
                  className={styles.help}
                  title="help"
                  type="help"
                  width="18"
                  height="19"
                  viewBox="0 0 24 24"
                />
              </span>
            </div>
            <InstructorControlsContainer role={role}>
              <span className={styles.controls}>
                <span data-id="draft-focus-edit">
                  <MLIcon
                    title="edit"
                    type="edit"
                    width="18"
                    height="19"
                    viewBox="0 0 24 24"
                  />
                </span>
                <span data-id="draft-focus-delete">
                  <MLIcon
                    title="trash"
                    type="trash"
                    width="18"
                    height="19"
                    viewBox="0 0 24 24"
                  />
                </span>
              </span>
            </InstructorControlsContainer>
          </h4>
          {draft && draft.focus || <a data-id="add-draft-focus" onClick={openDraftFocusModal}>Click to Add Draft Focus</a>}
        </div>

        <div className={styles.rightLinks}>
          <div>
            {draft && draft.instructions || <a data-id="add-instructions" href="#">+ Add Draft Instructions</a>}
          </div>

          <div className={styles.reflections}>
            {draft && draft.reflectionQuestions || <a data-id="add-reflections" href="#">+ Add Student Reflection Questions</a>}
            <span data-id="reflections-help">
              <MLIcon
                className={styles.help}
                title="help"
                type="help"
                width="18"
                height="19"
                viewBox="0 0 24 24"
              />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

Draft.propTypes = {
  draft: PropTypes.object,
  role: PropTypes.string
};

export default Draft;
