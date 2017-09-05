import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { AddCommentButton, CommentModal, FeedbackFlag } from '../index';
import styles from './feedbackEditor.css';

class FeedbackEditor extends Component {
  position;

  state = {
    showCommentModal: false,
    saving: false,
    showAddComment: false,
    content: this.props.content
  };

  componentWillReceiveProps = (nextProps) => {
    const newFeedback = !_.isEqual(this.props.lastFeedback, nextProps.lastFeedback);

    if(this.state.saving && newFeedback) {
      this.addHighlights(nextProps.lastFeedback.feedbackId);
        // let content = document.querySelectorAll('[data-contents=true]')[0].innerHTML;
      this.setState({
        showCommentModal: false,
        content: document.getElementById('feedbackEditor').innerHTML
      }, () => {
        this.props.updateFeedbackPaper(this.props.studentActivityId, this.props.studentDraftId, this.state.content);
      });
    }
  };

  handleSave = feedbackContent => {
    this.setState({ saving: true });
    this.props.createFeedback(this.props.studentActivityId, this.props.studentDraftId, feedbackContent);
  };

  addSelections = () => {
    let userSelection = window.getSelection().getRangeAt(0);
    let safeRanges = this.getSafeRanges(userSelection);
    safeRanges.map(range => {
      if (!range.collapsed) {
        let newNode = document.createElement('span');
        newNode.classList.add(styles.selected);
        range.surroundContents(newNode);
      }
    });
  };

  removeSelections = () => {
    // FixMe: Remove entire span instead of just the class.
    let selections = Array.from(document.getElementsByClassName(styles.selected));
    selections.map(selection => {
      selection.classList.remove(styles.selected);
    });
  };

  addHighlights = (feedbackId) => {
    let selections = Array.from(document.getElementsByClassName(styles.selected));
    //TODO: render flag component here
    selections.map(selection => {
      selection.classList.remove(styles.selected);
      selection.classList.add('highlight');
      selection.setAttribute('data-feedbackId', feedbackId);
    });
  };

  handleRightClick = (/*e*/) => {
    // e.preventDefault();
    // console.log('right click happened');
    // this.handleMouseUp();
  };

  handleMouseUp = e => {
    if (e.target.id !== 'addCommentButton') {
      if (this.state.showAddComment) {
        this.setState({
          showAddComment: false
        });
        this.removeSelections();
      }
      if (this.textHasBeenSelected()) {
        this.addSelections();
        this.addCommentButton();
      }
    }
  };

  closeModal = () => {
    this.removeSelections();
    this.setState({
      showCommentModal: false
    });
  };

  showCommentModal = () => {
    let selections = document.querySelectorAll(`.${styles.selected}`);
    let selected = selections[selections.length - 1];
    this.position = {
      top: selected.getBoundingClientRect().bottom + 20,
      left: selected.getBoundingClientRect().left
    };
    if (this.position.top > window.innerHeight - 270) {
      this.position.top = selected.getBoundingClientRect().top - 285;
    }
    this.setState({
      showCommentModal: true,
      showAddComment: false
    });
  };

  textHasBeenSelected = () => window.getSelection().toString() !== '';

  addCommentButton = () => {
    let selections = document.querySelectorAll(`.${styles.selected}`);
    let top = selections[0].getBoundingClientRect().top;
    this.position = { top };

    this.setState({
      showAddComment: true
    });
  };

  // selects ranges across paragraphs with ease
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
        } else {
          xs.setStart(s[i], dangerous.startOffset);
          xs.setEndAfter(s[i].nodeType === Node.TEXT_NODE ? s[i] : s[i].lastChild);
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
        } else {
          xe.setStartBefore(e[i].nodeType === Node.TEXT_NODE ? e[i] : e[i].firstChild);
          xe.setEnd(e[i], dangerous.endOffset);
        }
        re.unshift(xe);
      }
    }

    // Middle -- the uncaptured middle
    let xm;
    if (s.length > 0 && e.length > 0) {
      xm = document.createRange();
      xm.setStartAfter(s[s.length - 1]);
      xm.setEndBefore(e[e.length - 1]);
    } else {
      return [dangerous];
    }

    // Concat
    rs.push(xm);
    // response = rs.concat(re);

    // Send to Console
    return rs.concat(re);
  };

  // helper for elementContainsSelection
  isOrContains = (node, container) => {
    while (node) {
      if (node === container) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  };

  // tests if a selection is within a parent
  elementContainsSelection = element => {
    let selected;
    if (window.getSelection) {
      selected = window.getSelection();
      if (selected.rangeCount > 0) {
        for (let i = 0; i < selected.rangeCount; ++i) {
          if (!this.isOrContains(selected.getRangeAt(i).commonAncestorContainer, element)) {
            return false;
          }
        }
        return true;
      }
    } else if ((selected = document.selection) && selected.type !== 'Control') {
      return this.isOrContains(selected.createRange().parentElement(), element);
    }
    return false;
  };

  render() {
    return (
      <div
        className={styles.feedbackEditorWrapper}
        onContextMenu={this.handleRightClick}
        onMouseUp={this.handleMouseUp}
      >
        <div
          id="feedbackEditor"
          className={styles.feedbackEditor}
          dangerouslySetInnerHTML={{ __html: this.state.content }}
        />
        {this.state.showCommentModal
          ? <CommentModal position={this.position} handleSave={this.handleSave} closeModal={this.closeModal} />
          : null}
        {this.state.showAddComment
          ? <AddCommentButton position={this.position.top} handleClick={this.showCommentModal.bind(this)} />
          : null}
        {this.props.feedback.map(feedback => {
          let highlight = document.querySelector('[data-feedbackId="' + feedback.feedbackId + '"]');
          let flagTop = highlight.offsetParent.offsetTop + highlight.offsetTop - 8;
          return <FeedbackFlag feedback={feedback} flagTop={flagTop} />;
        })}
      </div>
    );
  }
}

FeedbackEditor.propTypes = {
  studentActivityId: PropTypes.string,
  studentDraftId: PropTypes.string,
  content: PropTypes.string,
  updateFeedbackPaper: PropTypes.func,
  createFeedback: PropTypes.func,
  lastFeedback: PropTypes.object,
  feedback: PropTypes.array
};

export default FeedbackEditor;
