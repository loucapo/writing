import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { MLEditor, MLMessage } from '../../MLComponents';
import { CompositionHeader } from '../index';
import { CompositionDraftDetailsContainer } from '../../../containers';
import selectn from 'selectn';
import styles from './composition.css';

class Composition extends Component {
  state = {
    draftIsEmpty: !selectn('studentDraft.paper.blocks[0].text', this.props),
    newContent: null
  };

  handleSave = () => {
    let newContent = this.state.newContent;
    this.props.updateDraftPaper(this.props.studentActivityId, this.props.studentDraft.studentDraftId, newContent);
    // Resetting newContent after save to be able to use it as a signal that unsaved changes have happened.
    this.setState(newContent: null);
  };

  handleEditorStateChange = newContent => {
    this.setState({
      draftIsEmpty: !newContent.blocks[0].text,
      newContent
    });
  };

  renderSaveMessage = () => {
    const saveMessage = this.props.saveDraftMessage;
    if (saveMessage && saveMessage.status) {
      return saveMessage.status === 'success'
        ? <MLMessage
          options={{
            id: '1234',
            message: `This draft was successfully saved on ${moment(this.props.studentDraft.modifiedDate).format(
              'MMMM Do, YYYY'
            )}`,
            type: 'success',
            icon: 'check'
          }}
          />
        : <MLMessage
          options={{
            id: '1234',
            message: 'There was a problem saving, please try again',
            type: 'error',
            icon: 'not'
          }}
          />;
    }
  };

  render() {
    return (
      <div className={styles.page}>
        <div>
          <CompositionHeader
            handleSave={this.handleSave}
            draftIsEmpty={this.state.draftIsEmpty}
            studentDraftId={this.props.studentDraft.studentDraftId}
            studentActivityId={this.props.studentActivityId}
            hasStartedReflectionQuestions={this.props.hasStartedReflectionQuestions}
          />
          <div className={styles.container}>
            <div className={styles.alert} data-id="saved-draft-alert">
              {this.renderSaveMessage()}
            </div>
            <MLEditor
              content={this.props.studentDraft.paper}
              editable={true}
              toolbarHidden
              notifyOnEditorUpdate={this.handleEditorStateChange}
            />
          </div>
        </div>
        <div className={styles.infoColumn}>
          <CompositionDraftDetailsContainer
            activityId={this.props.activityId}
            studentDraft={this.props.studentDraft}
            unsavedChanges={!!this.state.newContent}
          />
        </div>
      </div>
    );
  }
}

Composition.propTypes = {
  studentDraft: PropTypes.object,
  studentActivityId: PropTypes.string,
  activityId: PropTypes.string,
  updateDraftPaper: PropTypes.func,
  hasStartedReflectionQuestions: PropTypes.bool,
  saveDraftMessage: PropTypes.object
};

export default Composition;
