import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MLIcon from 'ml-react-cdl-icons';
import MLDropdown from '../../../MLDropdown/MLDropdown';
import MLDialog from '../../../MLDialog/MLDialog';
import MLCard from '../../../MLCard/MLCard';
import DraftGoals from './DraftGoals/DraftGoals';
import StudentReflectionQuestions from './StudentReflectionQuestions/StudentReflectionQuestions';
import DraftInstructionsForm from './DraftInstructionsForm/DraftInstructionsForm';

import styles from './draft.css';

class Draft extends Component {
  state = {
    showDeleteConfirm: false
  };

  updateInstructions = (instructions) => {
    this.props.updateInstructions(this.props.draft.draftId, instructions);
  };

  showDialog = () => {
    this.setState({
      showDeleteConfirm: true
    });
  };

  closeDialog = (confirm) => {
    let that = this;
    confirm = confirm || false;
    this.setState({
      showDeleteConfirm: false
    }, function remove() {
      if (confirm) {
        that.props.removeDraft(that.props.draft.draftId);
      }
    });
  };

  render() {
    let cardMessage = `Are you sure you want to delete ${this.props.cardTitle}? Once deleted it cannot be restored.`;
    return (
      <MLCard
        key={this.props.draft.draftId}
        type="draft"
        title={this.props.cardTitle}
        options={this.props.totalDrafts > 1 ?
          <a data-id="draft-delete" onClick={this.showDialog}>
            <MLIcon
              className={styles.icon}
              title="trash"
              type="trash"
              width="18"
              height="19"
              viewBox="0 0 24 24"
            />
          </a> : null}
      >

        <div>
          <MLDialog
            title={'Delete ' + this.props.cardTitle}
            message={cardMessage}
            show={this.state.showDeleteConfirm}
            close={this.closeDialog}
          />

          <section className={styles.draftType}>
            <div data-id="review-type-dropdown" className={styles.draftTypeLeft}>
              <div className={styles.subheader}>Review Type</div>
              <MLDropdown
                defaultOption={{id: '0000', value: 'Instructor Review'}}
                onChange={() => {
                }}
                contentDataId="review-type-selection-content"
                openDataId="review-type-selection-open"
              />
            </div>
          </section>


          <section className={styles.draftDetails}>
            <DraftGoals draft={this.props.draft} />

            <div className={styles.draftDetailsRight}>
              <DraftInstructionsForm
                value={this.props.draft.instructions || ''}
                updateInstructions={this.updateInstructions}
              />

              <StudentReflectionQuestions draft={this.props.draft} />

              <div className={styles.draftNote}>
                {this.props.children}
              </div>
            </div>
          </section>
        </div>
      </MLCard>
    );
  }
}

Draft.propTypes = {
  draft: PropTypes.object,
  totalDrafts: PropTypes.number,
  children: PropTypes.string,
  cardTitle: PropTypes.string,
  removeDraft: PropTypes.func,
  updateInstructions: PropTypes.func
};

export default Draft;
