import React, {Component, PropTypes} from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';

class MLEditor extends Component {
  editorState = (this.props.content)
    ? EditorState.createWithContent(convertFromRaw(this.props.content))
    : null;

  state = {
    editorState: this.editorState
  };

  componentWillReceiveProps = (newProps) => {
    if (newProps.editable) {
      this.refs.editor.focusEditor();
    }
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState
    });
  };

  handleBlur = (e) => {
    //TODO: need to use this as the data to post for the ID and as the data in the RTE on load.
    if(!!e.relatedTarget && e.relatedTarget.id === 'cancel') {
      this.setState({
        editorState: EditorState.createWithContent(convertFromRaw(this.props.content))
      });
      return;
    }
    let content = convertToRaw(this.state.editorState.getCurrentContent());
    this.props.handleSave(content);
  };

  render = () => {
    return (
      <div>
        <Editor
          onBlur={this.handleBlur}
          editorState={this.state.editorState}
          onEditorStateChange={this.onEditorStateChange}
          readOnly={!this.props.editable}
          toolbar={toolbar}
          ref="editor"
          toolbarOnFocus={!this.props.editable}
        />
      </div>
    );
  };
}

MLEditor.propTypes = {
  handleSave: PropTypes.func,
  editable: PropTypes.bool,
  content: PropTypes.object
};

export default MLEditor;
