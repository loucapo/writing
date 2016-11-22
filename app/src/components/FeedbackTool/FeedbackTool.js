import React, {Component, PropTypes} from 'react';
import RichTextEditor from 'ml-react-rte';
import SideMenu from './SideMenu/SideMenu';
import feedbackTool from './feedbackTool.css';
import toggleHighlightSelection from './utilities/toggleHighlightSelection';
import {Form} from 'freakin-react-forms';
import {EditorState, RichUtils} from 'draft-js';

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
      value: this.props.document
    });
  }

  componentWillReceiveProps() {
    // XXX i'd really like to leave this as an example, as we will be needing it and
    // XXX I'm finally getting clear on how to do the data load stuff
    // if(newProps.params.id !== oldProps.params.id) {
    //   this.props.fetchStudentSubmissionAction(newProps.props.params.id);
    // }
  }

  onChange(value) {
    const rect = window.getSelection().anchorOffset > 0
      ? window.getSelection().getRangeAt(0).getBoundingClientRect()
      : null;
    // this is ugly
    this.setState({value});
    if(rect) {
      this.setState({rect})
    }
  }

  toggleHighlight(color) {
    const editorValue = this.state.value;
    var editorState = editorValue.getEditorState();
    const value =  editorValue.setEditorState(toggleHighlightSelection(editorState, color));
    this.setState({value});
  }

  render() {
    const colorStyleMap = {
      green: {
        backgroundColor: 'lightgreen'
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
          <RichTextEditor onChange={this.onChange}
                          value={this.state.value}
                          customStyleMap={colorStyleMap}
                          readOnly={false} />
        </div>
        <SideMenu toggleHighlight={this.toggleHighlight} position={this.state.rect} submitOtherComment={this.props.submitOtherComment}  />
      </section>
    );
  }
}

FeedbackTool.propTypes = {
  document: PropTypes.object,
  isFetching: PropTypes.bool,
  errorMessage: PropTypes.string,
  submitOtherComment: PropTypes.func
};

export default FeedbackTool;
