import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import styles from './mlEditor.css';

class MLEditor extends Component {

  state = {
    editorState: null
  };

  componentDidMount = () => {
    this.createOrUpdateEditorState(this.props.content);
    this.refs.editor.focusEditor();
  };

  componentWillReceiveProps = newProps => {
    if (newProps.editable) {
      this.refs.editor.focusEditor();
    }
    if (!this.state.editorState || newProps.content !== this.props.content) {
      this.createOrUpdateEditorState(newProps.content);
    }
  };

  onEditorStateChange = editorState => {
    this.setState({
      editorState
    });
    if (this.props.notifyOnEditorUpdate) {
      let content = convertToRaw(editorState.getCurrentContent());
      this.props.notifyOnEditorUpdate(content);
    }
  };

  createOrUpdateEditorState = content => {
    this.setState({
      editorState: content ? EditorState.createWithContent(convertFromRaw(content)) : null
    });
  }

  handleBlur = event => {
    let id;
    if (event.relatedTarget) {
      // Chrome
      id = event.relatedTarget.id;
    } else if (event.nativeEvent.explicitOriginalTarget) {
      // Firefox
      id = event.nativeEvent.explicitOriginalTarget.id;
    }

    if (id === 'cancel') {
      this.setState({
        editorState: EditorState.createWithContent(convertFromRaw(this.props.content))
      });
      return;
    }
    let content = convertToRaw(this.state.editorState.getCurrentContent());
    if (this.props.handleSaveOnBlur) {
      this.props.handleSaveOnBlur(content);
    }
  };

  render = () => {
    const editableClass = this.props.editable ? styles.border : '';
    const editorTypeClass = this.props.onFeedbackEditor ? styles.feedbackEditor : styles.editor;
    return (
      <Editor
        onBlur={this.handleBlur}
        editorState={this.state.editorState}
        onEditorStateChange={this.onEditorStateChange}
        readOnly={!this.props.editable}
        toolbar={this.props.toolbarHidden}
        ref="editor"
        toolbarOnFocus={!this.props.editable}
        editorClassName={`${editorTypeClass} ${editableClass}`}
        wrapperClassName={styles.editorWrapper}
        toolbarClassName={this.props.toolbarHidden ? styles.toolbarHide : styles.toolbar}
      />
    );
  };
}

MLEditor.propTypes = {
  handleSaveOnBlur: PropTypes.func,
  editable: PropTypes.bool,
  content: PropTypes.object,
  notifyOnEditorUpdate: PropTypes.func,
  toolbarHidden: PropTypes.bool,
  onFeedbackEditor: PropTypes.bool
};

export default MLEditor;
