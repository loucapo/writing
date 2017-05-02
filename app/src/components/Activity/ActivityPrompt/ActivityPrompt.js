import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MLIcon from 'ml-react-cdl-icons';
import MLCard from '../../MLCard/MLCard';
import MLButton from '../../MLButton/MLButton';
import MLEditor from '../../MLEditor/MLEditor';

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
        title="Assignment Prompt"
        options={
          (this.state.editable)
            ?
              <div className="flex">
                <MLButton id="cancel" title="Cancel" dataId="prompt-cancel" handleClick={this.handleCancel} />
                <MLButton title="Save" color="blue" dataId="prompt-save" />
              </div>
            :
              <div>
                <a data-id="prompt-edit" onClick={this.toggleEditable}>
                  <MLIcon
                    className={styles.editIcon}
                    title="edit"
                    type="edit"
                    width="18"
                    height="19"
                    viewBox="0 0 24 24"
                  />
                </a>
                <a data-id="prompt-delete">
                  <MLIcon
                    className={styles.deleteIcon}
                    title="trash"
                    type="trash"
                    width="18"
                    height="19"
                    viewBox="0 0 24 24"
                  />
                </a>
              </div>
        }
      >
        <div data-id="prompt-description">
          {(this.props.prompt || this.state.editable)
            ?
              <MLEditor handleSave={this.handleSave} editable={this.state.editable} content={this.props.prompt} />
            :
              <a data-id="add-prompt" onClick={this.toggleEditable}>Click to add prompt</a>}
        </div>
      </MLCard>
    );
  }
}

ActivityPrompt.propTypes = {
  prompt: PropTypes.object,
  updateActivityPrompt: PropTypes.func,
  activityId: PropTypes.string
};

export default ActivityPrompt;
