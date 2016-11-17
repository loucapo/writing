import React, {Component} from 'react';
import RichTextEditor from 'ml-react-rte';
import MLModal from './../MLModal/MLModal';
import {Form} from 'freakin-react-forms';
import Input from './../FormElements/Input';
import feedbackTool from './feedbackTool.css';

class FeedbackTool extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  componentWillMount() { this.loadData(); }

  componentWillReceiveProps(newProps) { this.loadData(); }

  loadData() {
    this.props.fetchStudentSubmissionAction(this.props.params.id);
    this.setState({
      value: this.props.document,
      isOpen: false
    });
  }

  onChange(value) {
    this.setState({value});
  };

  onClose() {
    this.setState({isOpen:false})
  }

  onClick() {
    this.setState({
      isOpen: true,
      modalPosition: {top: '0'}
    })
  }

  render() {
    if (this.props.isFetching) {
      return (<p style={{ 'padding-top': '100px' }}> Loading... </p>);
    }
    if (this.props.errorMessage) {
      return (<p style={{ 'padding-top': '100px' }}>ERROR! -> {this.props.errorMessage}</p>);
    }

    return (
      <div>
        <button onClick={this.onClick} > click me </button>
        <RichTextEditor onChange={this.onChange} value={this.state.value} readOnly='true'/>
        <MLModal position={this.state.modalPosition} titleBar={{enable:false}} isOpen={this.state.isOpen} closeModal={this.onClose} >
          <div className={feedbackTool.modalForm}>
            <Form submitHandler={x => this.props.submitOtherComment(x)} model={this.props.model}>
              <Input frfProperty={this.props.model.otherComment}/>
              <button type="submit">Save</button>
              <button onClick={this.close}>Cancel</button>
            </Form>
          </div>
        </MLModal>
      </div>
    )
  }
};

export default FeedbackTool;
