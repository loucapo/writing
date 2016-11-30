import React, {Component, PropTypes} from 'react';
import { RichUtils, SelectionState, EditorState } from 'draft-js';
import RichTextEditor from 'ml-react-rte';
import SideMenu from './SideMenu/SideMenu';
import FeedbackToolHeader from './FeedbackToolHeader/FeedbackToolHeader';
import RubricContainer from '../../containers/RubricContainer';
import StudentReflection from './StudentReflection/StudentReflection';
import EndComment from './EndComment/EndComment';
import feedbackTool from './feedbackTool.css';

class FeedbackTool extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.toggleHighlight = this.toggleHighlight.bind(this);
    this.toggleRubric = this.toggleRubric.bind(this);
  }

  componentWillMount() {
    // XXX i'd really like to leave this as an example, as we will be needing it and
    // XXX I'm finally getting clear on how to do the data load stuff
    // this.props.fetchStudentSubmissionAction(this.props.params.id);

    this.setState({
      value: RichTextEditor.fromRaw(this.props.document ? this.props.document : ''),
      showRubric: false
    });
  }
 
  componentWillReceiveProps() {
    // // XXX i'd really like to leave this as an example, as we will be needing it and
    // XXX I'm finally getting clear on how to do the data load stuff
    // if(newProps.params.id !== oldProps.params.id) {
    //   this.props.fetchStudentSubmissionAction(newProps.props.params.id);
    // }
  }

  toggleRubric() {
    this.setState({
      showRubric: !this.state.showRubric
    });
  }


  isSelection(value) {
    const selection = value.getEditorState().getSelection();
    const start = selection.getStartOffset();
    const end = selection.getEndOffset();
    console.log('==========start=========');
    console.log(start);
    console.log(end);
    console.log('==========END start=========');
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
    if (!this.isSelection(editorValue)) {
      return;
    }
    console.log('=========="here"=========');
    console.log("here");
    console.log('==========END "here"=========');
    let newEditorState = RichUtils.toggleInlineStyle(editorValue.getEditorState(), color);
    const newSelection = editorValue.getEditorState().getSelection().toJS();
    newSelection.anchorOffset = newSelection.focusOffset;
    newEditorState = EditorState.acceptSelection(newEditorState, new SelectionState(newSelection));
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
    if (this.props.isFetching) {
      return (<p style={{ 'padding-top': '100px' }}> Loading... </p>);
    }
    if (this.props.errorMessage) {
      return (<p style={{ 'padding-top': '100px' }}>ERROR! -> {this.props.errorMessage}</p>);
    }

    const colorStyleMap = {
      green: {
        backgroundColor: 'lightgreen'
      },
      blue: {
        backgroundColor: '#B4D5FE'
      }
    };

    let feedbackToolContent;
    let sideMenu;
    let studentReflection;
    let endComment;
    if (this.state.showRubric) {
      feedbackToolContent =
        <RubricContainer showRubric={this.state.showRubric} toggleRubric={this.toggleRubric}/>;
    } else {
      feedbackToolContent = ( <RichTextEditor
        onChange={this.onChange}
        value={this.state.value}
        customStyleMap={colorStyleMap}
        customHandleKeyCommand={()=>{}}
        readOnly={false}/>);
      sideMenu = <SideMenu
        toggleHighlight={this.toggleHighlight}
        position={this.state.rect}
        submitOtherComment={this.props.submitOtherComment} />;
      studentReflection = <StudentReflection />;
      endComment = <EndComment />;
    }
    return (
      <section className={feedbackTool.feedbackToolContainer}>
        <div className={feedbackTool.editorContainer}>
          <FeedbackToolHeader toggleRubric={this.toggleRubric}/>
          <div className={feedbackTool.scrollContainer}>
            {studentReflection || null}
            {feedbackToolContent}
            {endComment || null}
          </div>
        </div>
        {sideMenu || null}
      </section>
    );
  };
}

FeedbackTool.propTypes = {
  document: PropTypes.object,
  isFetching: PropTypes.bool,
  errorMessage: PropTypes.string,
  submitOtherComment: PropTypes.func,
  submissionId: PropTypes.string,
  submissionOnChange: PropTypes.func,
  showRubric: PropTypes.bool,
  toggleRubric: PropTypes.func
  };

export default FeedbackTool;
