import React, {Component, PropTypes} from 'react';
import { RichUtils, SelectionState, EditorState } from 'draft-js';
import RichTextEditor from 'ml-react-rte';
import FeedbackToolContentFlagsContainer from './../../containers/FeedbackToolContentFlagsContainer';
import SideMenu from './SideMenu/SideMenu';
import FeedbackToolHeader from './FeedbackToolHeader/FeedbackToolHeader';
import RubricContainer from '../../containers/RubricContainer';
import StudentReflection from './StudentReflection/StudentReflection';
import EndComment from './EndComment/EndComment';
import feedbackTool from './feedbackTool.css';

class FeedbackTool extends Component {
  state = {
    value: RichTextEditor.fromRaw(this.props.document ? this.props.document : ''),
    showRubric: false,
    showQuickFeedbackTool: false,
    isRubricLoaded: false
  };

  toggleRubric = () => {
    this.setState({
      showRubric: !this.state.showRubric
    });
  };

  toggleIsRubricLoaded = () => {
    this.setState({isRubricLoaded: !this.state.isRubricLoaded});
  };

  isSelection = (editorState) => {
    const selection = editorState.getSelection();
    const start = selection.getStartOffset();
    const end = selection.getEndOffset();

    return start !== end;
  };

  onChange = (value) => {
    if (!this.isSelection(value.getEditorState())) {
      return;
    }

    if(window.getSelection().rangeCount <= 0) {
      return;
    }
    const rect = window.getSelection().getRangeAt(0).getBoundingClientRect();

    this.setState({value, rect, isNotSelection: false});
  };

  resetSelection = (editorState) => {
    if (!this.isSelection(editorState)) {
      return;
    }

    const newSelection = editorState.getSelection().toJS();
    newSelection.anchorOffset = newSelection.focusOffset;
    return EditorState.acceptSelection(editorState, new SelectionState(newSelection));
  };

  persistDocumentChange = (value) => {
    const submission = {
      id: this.props.submissionId,
      document: RichTextEditor.toRaw(value)
    };
    this.props.submissionOnChange(submission);
  };

  toggleHighlight = (editorState, color) => {
    return RichUtils.toggleInlineStyle(editorState, color);
  };

  onHighlight = (color) => {
    const editorValue = this.state.value;
    let editorState = editorValue.getEditorState();

    if (!this.isSelection(editorState)) {
      return false;
    }
    editorState = this.toggleHighlight(editorState, color);
    const value = editorValue.setEditorState(editorState);
    this.setState({value});

    return true;
  };

  completeHighlight = (opts) => {
    const editorValue = this.state.value;
    let editorState = editorValue.getEditorState();

    if(opts.removeColor) {
      editorState = this.toggleHighlight(editorState, opts.removeColor);
    }

    if(opts.changeColor) {
      editorState = this.toggleHighlight(editorState, opts.removeColor);
      editorState = this.toggleHighlight(editorState, opts.changeColor);
    }

    editorState = this.resetSelection(editorState);

    const value = editorValue.setEditorState(editorState);
    this.setState({value});

    if(opts.success) {
      this.persistDocumentChange(value);
    }
  };

  render = () => {
    const colorStyleMap = {
      green: {
        backgroundColor: 'lightgreen'
      },
      blue: {
        backgroundColor: '#b0daff'
      }
    };

    let feedbackToolContent;
    let flags;
    let sideMenu;
    let studentReflection;
    let endComment;
    if (this.state.showRubric) {
      feedbackToolContent = (
        <RubricContainer
          showRubric={this.state.showRubric}
          toggleRubric={this.toggleRubric}
          isRubricLoaded={this.state.isRubricLoaded}
          toggleIsRubricLoaded={this.toggleIsRubricLoaded}
        />);
    } else {
      feedbackToolContent = ( <RichTextEditor
        onChange={this.onChange}
        value={this.state.value}
        customStyleMap={colorStyleMap}
        customHandleKeyCommand={()=>{}}
        readOnly={false} />);
      sideMenu = (<SideMenu
        submitFeedbackToolContentItem={this.props.submitFeedbackToolContentItem}
        onHighlight={this.onHighlight}
        completeHighlight={this.completeHighlight}
        position={this.state.rect}
        submissionId={this.props.submissionId}
        showQuickFeedbackTool={this.state.showQuickFeedbackTool}
        resourceLinks={this.props.resourceLinks}
      />);
      studentReflection = (<StudentReflection />);
      endComment = (<EndComment />);
      flags = (<FeedbackToolContentFlagsContainer submissionId={this.props.submissionId} />);
    }
    return (
      <section className={feedbackTool.feedbackToolContainer}>
        <div className={feedbackTool.editorContainer}>
          <FeedbackToolHeader toggleRubric={this.toggleRubric} />
          <div className={feedbackTool.scrollContainer}>
            <div>
              {studentReflection || null}
              {feedbackToolContent}
              {endComment || null}
            </div>
            {flags || null}
          </div>
        </div>
        {sideMenu || null}
      </section>
    );
  }
}

FeedbackTool.propTypes = {
  document: PropTypes.object,
  isFetching: PropTypes.bool,
  errorMessage: PropTypes.string,
  submissionId: PropTypes.string,
  submissionOnChange: PropTypes.func,
  showRubric: PropTypes.bool,
  showQuickFeedbackTool: PropTypes.bool,
  toggleQuickFeedback: PropTypes.func,
  toggleRubric: PropTypes.func,
  submitFeedbackToolContentItem: PropTypes.func,
  resourceLinks: PropTypes.array
};

export default FeedbackTool;
