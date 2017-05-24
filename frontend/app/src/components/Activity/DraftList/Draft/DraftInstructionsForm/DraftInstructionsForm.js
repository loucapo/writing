import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MLIcon from 'ml-react-cdl-icons';
import MLButton from '../../../../MLButton/MLButton';

import styles from './draftInstructionsForm.css';

class DraftInstructionsForm extends Component {
  state = {
    showForm: false,
    value: this.props.value
  };

  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  };

  cancelInstructions = () => {
    this.setState({
      value: this.props.value
    });
    this.toggleForm();
  };

  saveInstructions = () => {
    this.props.updateInstructions({instructions: this.state.value});
    this.toggleForm();
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  };

  render() {

    let showFormClass = this.state.showForm ? '' : ` ${styles.hide}`;
    let formClass = `${styles.addDraftInstForm}${showFormClass}`;

    return (
      <div>
        <div className={this.state.showForm ? ` ${styles.hide}` : ''}>
          {!this.state.value ?
            <a data-id="add-instructions" href="#" className={styles.flex} onClick={this.toggleForm}>
              <MLIcon
                className={styles.icon}
                title="plus"
                type="plus"
                width="18"
                height="19"
                viewBox="0 0 24 24"
              />&nbsp;
              Add Draft Instructions
            </a>
          :
            <div>
              <div className={styles.addDraftHeading}>
                <span>Draft Instructions</span>
                <div>
                  <a data-id="draft-instructions-edit" onClick={this.toggleForm}>
                    <MLIcon
                      className={styles.icon}
                      title="edit"
                      type="edit"
                      width="18"
                      height="19"
                      viewBox="0 0 24 24"
                    />
                  </a>
                  <a data-id="draft-instructions-delete">
                    <MLIcon
                      className={styles.icon}
                      title="trash"
                      type="trash"
                      width="18"
                      height="19"
                      viewBox="0 0 24 24"
                    />
                  </a>
                </div>
              </div>
              <div data-id="draft-instructions">
                {this.state.value}
              </div>
            </div>
          }
        </div>

        <div className={formClass}>
          <div className={styles.flexSpace}>
            <span>Draft Instructions</span>
            <span className={styles.flex}>
              <MLButton
                dataId="cancel-draft-instructions"
                title="Cancel"
                handleClick={this.cancelInstructions}
                bordered={true}
              />
              <MLButton
                dataId="save-draft-instructions"
                title="Save"
                handleClick={this.saveInstructions}
              />
            </span>
          </div>
          <div className={styles.addDraftInstField}>
            <textarea
              data-id="textarea-draft-instructions"
              onChange={this.handleChange}
              value={this.state.value}
            />
          </div>
        </div>
      </div>
    );
  }
}

DraftInstructionsForm.propTypes = {
  show: PropTypes.bool,
  updateInstructions: PropTypes.func,
  value: PropTypes.string
};

export default DraftInstructionsForm;
