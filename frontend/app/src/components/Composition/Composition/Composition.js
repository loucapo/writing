import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'lodash';
import { MLEditor, MLMessage } from '../../MLComponents';
import { CompositionHeader } from '../index';
import { CompositionDraftDetailsContainer } from '../../../containers';
import styles from './composition.css';

class Composition extends Component {
  state = {
    draftIsEmpty: this.props.draftIsEmpty,
    content: this.props.studentDraft.paper
  };

  handleSave = () => {
    let content = this.state.content;
    this.props.updateDraftPaper(this.props.studentActivityId, this.props.studentDraft.studentDraftId, content);
  };

  handleEditorStateChange = newContent => {
    this.setState({
      draftIsEmpty: !newContent.blocks[0].text,
      content: newContent
    });
  };

  checkForUnSavedChanges = () => {
    const content = this.state.content;
    if (!content) {
      return false;
    }
    const currentContent = content.blocks[0].text;
    const paper = _.get(this.props, 'studentDraft.paper');
    // Return true if the paper has already been saved and the current content is different
    // or if there is no saved paper and the current draft has been started
    return (paper && paper.blocks[0].text !== currentContent) || (!paper && currentContent.length > 0);
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
        <div className={styles.subpage}>
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
              toolbarHidden={false}
              notifyOnEditorUpdate={this.handleEditorStateChange}
            />
          </div>
        </div>
        <div className={styles.infoColumn}>
          <CompositionDraftDetailsContainer
            activityId={this.props.activityId}
            studentActivityId={this.props.studentActivityId}
            studentDraft={this.props.studentDraft}
            unsavedChanges={this.checkForUnSavedChanges()}
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
  saveDraftMessage: PropTypes.object,
  draftIsEmpty: PropTypes.bool
};

export default Composition;
