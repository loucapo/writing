import React, {Component, PropTypes} from 'react';
import { RichUtils, SelectionState, EditorState } from 'draft-js';
import RichTextEditor from 'ml-react-rte';
import SideMenu from './SideMenu/SideMenu';
import feedbackTool from './feedbackTool.css';

class FeedbackTool extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.toggleHighlight = this.toggleHighlight.bind(this);
  }

  componentWillMount() {
    // XXX i'd really like to leave this as an example, as we will be needing it and
    // XXX I'm finally getting clear on how to do the data load stuff
    // this.props.fetchStudentSubmissionAction(this.props.params.id);
    this.setState({
      value: RichTextEditor.fromRaw(this.props.document ? this.props.document : '')
    });
  }

  componentWillReceiveProps() {
    // // XXX i'd really like to leave this as an example, as we will be needing it and
    // XXX I'm finally getting clear on how to do the data load stuff
    // if(newProps.params.id !== oldProps.params.id) {
    //   this.props.fetchStudentSubmissionAction(newProps.props.params.id);
    // }
  }

  isSelection(value) {
    const selection = value.getEditorState().getSelection();
    const start = selection.getStartOffset();
    const end = selection.getEndOffset();
    return start !== end;
  }

  onChange(value) {
    if (!this.isSelection(value)) {
      return;
    }

    const rect = window.getSelection().anchorOffset > 0
      ? window.getSelection().getRangeAt(0).getBoundingClientRect()
      : null;

    this.setState({value, rect, isNotSelection: false});
  }

  toggleHighlight(color) {
    const editorValue = this.state.value;
    if(!this.isSelection(editorValue)) {
      return;
    }
    let newEditorState = RichUtils.toggleInlineStyle(editorValue.getEditorState(), color);
    newEditorState = EditorState.acceptSelection(newEditorState, new SelectionState());
    const value = editorValue.setEditorState(newEditorState);
    this.setState({value});

    const submission = {
      id: this.props.submissionId,
      document: RichTextEditor.toRaw(value)
    };
    this.props.submissionOnChange(submission);
    return true;
  }

  render() {
    const colorStyleMap = {
      green: {
        backgroundColor: 'lightgreen'
      },
      blue: {
        backgroundColor: '#B4D5FE'
      }
    };
    if (this.props.isFetching) {
      return (<p style={{ 'padding-top': '100px' }}> Loading... </p>);
    }
    if (this.props.errorMessage) {
      return (<p style={{ 'padding-top': '100px' }}>ERROR! -> {this.props.errorMessage}</p>);
    }
    return (
      <section className={feedbackTool.feedbackToolContainer}>
        <div className={feedbackTool.editorContainer}>
          <RichTextEditor
            onChange={this.onChange}
            value={this.state.value}
            customStyleMap={colorStyleMap}
            customHandleKeyCommand={()=>{}}
            readOnly={false} />
        </div>
        <SideMenu
          toggleHighlight={this.toggleHighlight}
          position={this.state.rect}
          submitOtherComment={this.props.submitOtherComment} />
      </section>
    );
  }
}

FeedbackTool.propTypes = {
  document: PropTypes.object,
  isFetching: PropTypes.bool,
  errorMessage: PropTypes.string,
  submitOtherComment: PropTypes.func,
  submissionId: PropTypes.string,
  submissionOnChange: PropTypes.func
};

export default FeedbackTool;
