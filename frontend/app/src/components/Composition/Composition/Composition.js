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
    content: this.props.studentDraft.paper
  };

  handleSave = () => {
    let content = this.state.content;
    this.props.updateDraftPaper(this.props.studentActivityId, this.props.studentDraft.studentDraftId, content);
  };

  handleEditorStateChange = newContent => {
    this.setState({
      content: newContent
    });
  };

  draftIsEmpty = (content) => {
    return !content || !_.find(content.blocks, block => _.get(block, 'text.length') > 0);
  };

  checkForUnSavedChanges = () => {
    const content = this.state.content;
    if (!content) {
      return false;
    }
    const paper = _.get(this.props, 'studentDraft.paper');
    // Return true if the paper has already been saved and the current content is different
    // or if there is no saved paper and the current draft is not empty
    return !_.isEqual(content, paper) || (!paper && !this.draftIsEmpty(content));
  };

  renderSaveMessage = () => {
    const saveMessage = this.props.saveDraftMessage;
    if (saveMessage && saveMessage.status) {
      return saveMessage.status === 'success'
        ? <MLMessage
          options={{
            id: '1234',
            message: `This draft was successfully saved on ${moment(
              this.props.studentDraft.modifiedAt || this.props.studentDraft.createdAt).format(
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
            draftIsEmpty={this.draftIsEmpty(this.state.content)}
            studentDraftId={this.props.studentDraft.studentDraftId}
            activityId={this.props.activityId}
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
  saveDraftMessage: PropTypes.object
};

export default Composition;
