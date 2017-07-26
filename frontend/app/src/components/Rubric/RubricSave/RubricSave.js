import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MLButton, MLDialog } from '../../MLComponents';

import styles from './rubricSave.css';

class SaveDialog extends Component {
  state = {
    showDialog: false
  };

  showDialog = () => {
    this.setState({showDialog: true});
  };

  closeDialog = confirm => {
    let that = this;
    confirm = confirm || false;
    this.setState(
      {
        showDialog: false
      },
      function submit() {
        if (confirm) {
          that.props.handleSave();
        }
      }
    );
  };

  render() {
    return (
      <div>
        <div className={styles.saveButton}>
          <MLButton
            dataId="save-rubric"
            handleClick={this.props.gradeIsComplete ? this.props.handleSave : this.showDialog}
            disabled={this.props.gradeIsNotStarted}
            title="Save"
          />
        </div>
        <MLDialog
          title="Final Rubric Evaluation"
          message="The rubric wasn't fully filled out and you won't be able to edit if you continue. Are you sure you want to continue?"
          show={this.state.showDialog}
          close={this.closeDialog.bind(this, false)}
        >
          <MLButton
            title="No"
            bordered={true}
            color="red"
            dataId="dialog-cancel"
            handleClick={this.closeDialog.bind(this, false)}
          />
          <MLButton title="Yes" handleClick={this.closeDialog.bind(this, true)} dataId="dialog-submit" />
        </MLDialog>
      </div>
    );
  }
}

SaveDialog.propTypes = {
  handleSave: PropTypes.func,
  gradeIsComplete: PropTypes.bool,
  gradeIsNotStarted: PropTypes.bool
};

export default SaveDialog;
