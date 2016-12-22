import React, {Component, PropTypes} from 'react';
import { RichUtils, SelectionState, EditorState } from 'draft-js';
import RichTextEditor from 'ml-react-rte';
import FeedbackToolContentFlagsContainer from './../../containers/FeedbackToolContentFlagsContainer';
import SideMenu from './SideMenu/SideMenu';
import FeedbackToolHeader from './FeedbackToolHeader/FeedbackToolHeader';
import RubricContainer from '../../containers/RubricContainer';
import StudentReflection from './StudentReflection/StudentReflection';
import EndComment from './EndComment/EndComment';
import MLIcon from 'ml-react-cdl-icons';

import coreCss from '../../styles/core.css';
import feedbackTool from './feedbackTool.css';

class FeedbackTool extends Component {
  flagCounter = 1;

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

    // TODO: we should revisit with Raif about concerns he had about doing it this way from the get-go
    // new, maybe hacky fix for flag positioning

    // create a new wrapper node for your selection
    const newNode = document.createElement('span');
    newNode.id = 'marker' + this.flagCounter;
    newNode.classList.add('FeedbackTool__selected__2SpeA');
    window.getSelection().getRangeAt(0).surroundContents(newNode);

    // if you already had a selection, kill it first
    if (document.querySelectorAll('.FeedbackTool__selected__2SpeA').length > 1) {
      const lastNode = document.querySelector('#marker' + (this.flagCounter - 1));
      lastNode.outerHTML = lastNode.innerHTML;
    }

    // the selected element
    const elemOffset = document.querySelector('#marker' + this.flagCounter).offsetTop;

    // the parent container
    const contOffset = this.refs.draftContainer.offsetTop;

    this.flagCounter ++;
    const rect = window.getSelection().getRangeAt(0).getBoundingClientRect();

    // the position of the marked content inside the parent container
    const offSet = elemOffset - contOffset;

    const coordinates = {
      top: offSet,
      left: rect.left,
      width: rect.width,
      bottom: rect.bottom
    };

    this.setState({value, rect: coordinates, isNotSelection: false});
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

  focus = () => {
    this.refs.ml_rte.refs.editor.focus();
  };

  render = () => {
    const colorStyleMap = {
      green: {
        backgroundColor: 'lightgreen'
      },
      blue: {
        backgroundColor: '#b0daff'
      },
      orange: {
        backgroundColor: '#ff8a57'
      }

    };

    let feedbackToolContent;
    let flags;
    let sideMenu;
    let studentReflection;
    let endComment;
    let heading;
    if (this.state.showRubric) {
      heading = '';
      feedbackToolContent = (
        <RubricContainer
          showRubric={this.state.showRubric}
          toggleRubric={this.toggleRubric}
          isRubricLoaded={this.state.isRubricLoaded}
          toggleIsRubricLoaded={this.toggleIsRubricLoaded}
        />);
    } else {
      heading = (
        <div className={feedbackTool.heading} data-id="studentSubmission">
          <h1 className={feedbackTool.titleSpan}>
            <span>
              <MLIcon
                iconTitle="minus"
                iconFill="#000000" // black
                iconType="minus"
                iconWidth="12"
                iconHeight="12"
                viewBox="0 0 24 24"
              />
            </span>
            <span className={feedbackTool.title}>Final Draft</span>
          </h1>
        </div>
      );
      feedbackToolContent = ( <RichTextEditor
        onChange={this.onChange}
        value={this.state.value}
        customStyleMap={colorStyleMap}
        customHandleKeyCommand={()=>{}}
        readOnly={false}
        ref="ml_rte" />);
      sideMenu = (<SideMenu
        submitFeedbackToolContentItem={this.props.submitFeedbackToolContentItem}
        onHighlight={this.onHighlight}
        completeHighlight={this.completeHighlight}
        position={this.state.rect}
        submissionId={this.props.submissionId}
        showQuickFeedbackTool={this.state.showQuickFeedbackTool}
        focus={this.focus}
      />);
      studentReflection = (<StudentReflection />);
      endComment = (<EndComment />);
      flags = (<FeedbackToolContentFlagsContainer submissionId={this.props.submissionId} />);
    }
    return (
      <div className={ feedbackTool.feedbackToolPage }>
        <FeedbackToolHeader toggleRubric={this.toggleRubric} />
        <section className={feedbackTool.feedbackToolContainer}>
          <div className={feedbackTool.editorContainer}>
            <div className={feedbackTool.scrollContainer} ref="scroll">
              <div>
                {studentReflection || null}
                <div className={ coreCss.panel }>
                  {heading}
                  <div className={ feedbackTool.draftContainer } ref="draftContainer" >
                    {feedbackToolContent}
                    {flags || null}
                  </div>
                </div>
                {endComment || null}
              </div>
            </div>
          </div>
          {sideMenu || null}
        </section>
      </div>
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
  submitFeedbackToolContentItem: PropTypes.func
};

export default FeedbackTool;
