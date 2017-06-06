import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MLEditor } from './../../MLComponents/index';
import { CompositionHeader } from './../index';
import { CompositionDraftDetailsContainer } from './../../../containers/index';
import selectn from 'selectn';
import styles from './composition.css';

class Composition extends Component {
  state = {
    draftIsEmpty: !selectn('studentDraft.paper.blocks[0].text', this.props)
  };

  updateDraftState = text => {
    this.setState({ draftIsEmpty: text.length === 0 });
  };

  handleSave = content => {
    this.updateDraftState(content.blocks[0].text);
    this.props.updateDraftPaper(this.props.studentActivityId, this.props.studentDraft.studentDraftId, content);
  };

  handleEditorStateChange = content => {
    this.updateDraftState(content.blocks[0].text);
  };

  render() {
    return (
      <div className={styles.page}>
        <div>
          <CompositionHeader draftIsEmpty={this.state.draftIsEmpty}
            studentDraft={this.props.studentDraft}
            studentActivityId={this.props.studentActivityId} />
          <div className={styles.container}>
            <MLEditor
              handleSave={this.handleSave}
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
  updateDraftPaper: PropTypes.func
};

export default Composition;
