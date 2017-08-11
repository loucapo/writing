import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { AddCommentButton } from '../../FeedbackTool';
import styles from './mlEditor.css';

class MLEditor extends Component {
  editorState = this.props.content ? EditorState.createWithContent(convertFromRaw(this.props.content)) : null;

  state = {
    editorState: this.editorState,
    showAddComment: false
  };

  componentWillReceiveProps = newProps => {
    if (newProps.editable) {
      this.refs.editor.focusEditor();
    }
  };

  componentWillMount = () => {
    document.addEventListener('mousedown', this.handleMouseDown);
  };

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.handleMouseDown);
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

  getSafeRanges = dangerous => {
    let a = dangerous.commonAncestorContainer;
    // Starts -- Work inward from the start, selecting the largest safe range
    let s = new Array(0);
    let rs = new Array(0);
    if (dangerous.startContainer !== a) {
      for (let i = dangerous.startContainer; i !== a; i = i.parentNode) {
        s.push(i);
      }
    }
    if (s.length > 0) {
      for (let i = 0; i < s.length; i++) {
        let xs = document.createRange();
        if (i) {
          xs.setStartAfter(s[i - 1]);
          xs.setEndAfter(s[i].lastChild);
        }
        else {
          xs.setStart(s[i], dangerous.startOffset);
          xs.setEndAfter(
              (s[i].nodeType === Node.TEXT_NODE)
                  ? s[i]
                  : s[i].lastChild
          );
        }
        rs.push(xs);
      }
    }

    // Ends -- basically the same code reversed
    let e = new Array(0);
    let re = new Array(0);
    if (dangerous.endContainer !== a) {
      for (let i = dangerous.endContainer; i !== a; i = i.parentNode) {
        e.push(i);
      }
    }
    if (e.length > 0) {
      for (let i = 0; i < e.length; i++) {
        let xe = document.createRange();
        if (i) {
          xe.setStartBefore(e[i].firstChild);
          xe.setEndBefore(e[i - 1]);
        }
        else {
          xe.setStartBefore(
            (e[i].nodeType === Node.TEXT_NODE)
            ? e[i]
            : e[i].firstChild
          );
          xe.setEnd(e[i], dangerous.endOffset);
        }
        re.unshift(xe);
      }
    }

    // Middle -- the uncaptured middle
    let xm;
    if ((s.length > 0) && (e.length > 0)) {
      xm = document.createRange();
      xm.setStartAfter(s[s.length - 1]);
      xm.setEndBefore(e[e.length - 1]);
    }
    else {
      return [dangerous];
    }

    // Concat
    rs.push(xm);
    // response = rs.concat(re);

    // Send to Console
    return rs.concat(re);
  };

  addHighlights = () => {
    let userSelection = window.getSelection().getRangeAt(0);

    // Add highlights
    let safeRanges = this.getSafeRanges(userSelection);
    safeRanges.map((range, index) => {
      if (!range.collapsed) {
        let newNode = document.createElement('span');
        newNode.id = 'marker' + index;
        // newNode.classList.add(styles.highlight);
        newNode.classList.add('selected');
        range.surroundContents(newNode);
      }
    });
  };

  addCommentButton = () => {
    let selections = Array.from(document.getElementsByClassName('selected'));
    let top = selections[0].offsetTop;
    let parent = selections[0].offsetParent;

    let tempNode = document.createElement('span');
    parent.appendChild(tempNode);

    render(<AddCommentButton position={top} />, tempNode);

    // TODO: Remove entire span instead of just the class.
    selections.map(selection => {
      selection.classList.remove('selected');
    });
  };

  handleMouseUp = () => {
    let addCommentButton = document.getElementById('addCommentButton');
    if (this.textHasBeenSelected() && !addCommentButton) {
      this.addHighlights();
      this.addCommentButton();
    }
  };

  handleMouseDown = () => {
    let addCommentButton = document.getElementById('addCommentButton');
    if (addCommentButton) {
      addCommentButton.remove();
    }
  };

  textHasBeenSelected = () => (
    window.getSelection().toString() !== ''
  );

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
    return (
      <div id="editor" onMouseUp={this.handleMouseUp}>
        <Editor
          onBlur={this.handleBlur}
          editorState={this.state.editorState}
          onEditorStateChange={this.onEditorStateChange}
          readOnly={!this.props.editable}
          toolbar={this.props.toolbarHidden}
          ref="editor"
          toolbarOnFocus={!this.props.editable}
          editorClassName={styles.editor}
          wrapperClassName={styles.editorWrapper}
          toolbarClassName={this.props.toolbarHidden ? styles.toolbarHide : styles.toolbar}
        />
      </div>
    );
  };
}

MLEditor.propTypes = {
  handleSaveOnBlur: PropTypes.func,
  editable: PropTypes.bool,
  content: PropTypes.object,
  notifyOnEditorUpdate: PropTypes.func,
  toolbarHidden: PropTypes.bool
};

export default MLEditor;
