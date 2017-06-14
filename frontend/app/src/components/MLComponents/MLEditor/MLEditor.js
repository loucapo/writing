import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import styles from './mlEditor.css';

class MLEditor extends Component {
  editorState = this.props.content ? EditorState.createWithContent(convertFromRaw(this.props.content)) : null;

  state = {
    editorState: this.editorState
  };

  componentWillReceiveProps = newProps => {
    if (newProps.editable) {
      this.refs.editor.focusEditor();
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

  handleBlur = e => {
    //TODO: need to use this as the data to post for the ID and as the data in the RTE on load.
    if (!!e.relatedTarget && e.relatedTarget.id === 'cancel') {
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
    return (
      <Editor
        onBlur={this.handleBlur}
        editorState={this.state.editorState}
        onEditorStateChange={this.onEditorStateChange}
        readOnly={!this.props.editable}
        toolbar={toolbar}
        ref="editor"
        toolbarOnFocus={!this.props.editable}
        editorClassName={styles.editor}
        wrapperClassName={styles.editorWrapper}
        toolbarClassName={styles.toolbar}
      />
    );
  };
}

MLEditor.propTypes = {
  handleSaveOnBlur: PropTypes.func,
  editable: PropTypes.bool,
  content: PropTypes.object,
  notifyOnEditorUpdate: PropTypes.func
};

export default MLEditor;
