import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MLIcon from 'ml-react-cdl-icons';
import { MLButton, MLCard, MLEditor } from '../../MLComponents';

import styles from './activityPrompt.css';

class ActivityPrompt extends Component {
  state = {
    editable: false
  };

  toggleEditable = () => {
    this.setState({
      editable: !this.state.editable
    });
  };

  handleCancel = () => {
    this.setState({
      editable: false,
      prompt: this.props.prompt || null
    });
  };

  handleSave = (prompt) => {
    let body = {
      prompt: JSON.stringify(prompt)
    };
    this.props.updateActivityPrompt(this.props.activityId, body);
    this.setState({
      editable: false
    });
  };

  render() {
    return (
      <MLCard
        type="prompt"
        title="Assignment Prompt">
        {
          (this.state.editable)
            ?
              <div className="flex">
                <MLButton
                  title="Cancel"
                  dataId="prompt-cancel"
                  id="cancel"
                  handleClick={this.handleCancel}
                  bordered={true}
                />
                <MLButton title="Save" dataId="prompt-save" />
              </div>
            :
              <div>
                <a data-id="prompt-edit" onClick={this.toggleEditable}>
                  <MLIcon
                    className={styles.icon}
                    title="edit"
                    type="edit"
                    width="18"
                    height="19"
                    viewBox="0 0 24 24"
                  />
                </a>
                <a data-id="prompt-delete">
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
        }
        <div data-id="prompt-description">
          {(this.props.promptText || this.state.editable)
            ?
              <MLEditor
                handleSaveOnBlur={this.handleSave}
                editable={this.state.editable}
                content={this.props.prompt}
                toolbarHidden={!this.state.editable}
              />
            :
              <a data-id="add-prompt" onClick={this.toggleEditable}>Click to add prompt</a>}
        </div>
      </MLCard>
    );
  }
}

ActivityPrompt.propTypes = {
  prompt: PropTypes.object,
  promptText: PropTypes.string,
  updateActivityPrompt: PropTypes.func,
  activityId: PropTypes.string
};

export default ActivityPrompt;
