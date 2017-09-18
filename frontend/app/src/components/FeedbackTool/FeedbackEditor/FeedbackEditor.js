import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { AddCommentButton, CommentModal, CommentMenu, FeedbackFlags } from '../index';
import styles from './feedbackEditor.css';

class FeedbackEditor extends Component {
  position;

  state = {
    showCommentModal: false,
    showAddComment: false,
    showCommentMenu: false,
    saving: false,
    content: this.props.content
  };

  componentWillReceiveProps = (nextProps) => {
    const newFeedback = !_.isEqual(this.props.lastFeedback, nextProps.lastFeedback);

    if(this.state.saving && newFeedback) {
      this.addHighlights(nextProps.lastFeedback.feedbackId, nextProps.lastFeedback.level);
      this.setState({
        showCommentModal: false,
        saving: false,
        content: document.getElementById('feedbackEditor').innerHTML
      }, () => {
        this.props.updateFeedbackPaper(this.props.studentActivityId, this.props.studentDraftId, this.state.content);
      });
    }
  };

  componentWillMount = () => {
    document.body.addEventListener('contextmenu', this.handleRightClick.bind(this));
  };

  componentWillUnmount = () => {
    document.body.removeEventListener('contextmenu', this.handleRightClick.bind(this));
  };

  handleCreateFeedback = (feedbackContent, level) => {
    this.setState({ saving: true });
    this.props.createFeedback(this.props.studentActivityId, this.props.studentDraftId, feedbackContent, level);
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

    // Grab position of selected text
    let selected = document.querySelector(`.${styles.selected}`);
    this.position = {
      top: selected.offsetTop,
      left: selected.getBoundingClientRect().left,
      bottom: selected.getBoundingClientRect().bottom
    };
  };

  removeSelections = () => {
    // FixMe: Remove entire span instead of just the class.
    let selections = Array.from(document.getElementsByClassName(styles.selected));
    selections.map(selection => {
      selection.classList.remove(styles.selected);
    });
  };

  addHighlights = (feedbackId, level) => {
    let selections = Array.from(document.getElementsByClassName(styles.selected));
    selections.map(selection => {
      selection.classList.remove(styles.selected);
      selection.classList.add(styles.highlight);
      if (level === 'Good Job') {
        selection.classList.add(styles.highlightGreen);
      }
      selection.setAttribute('data-feedback-id', feedbackId);
    });
  };

  handleRightClick = e => {
    let selected = document.querySelector(`.${styles.selected}`);
    if (selected) {
      e.preventDefault();
      this.position.top += 20;

      this.setState({
        showCommentMenu: true,
        showAddComment: false
      });
    }
  };

  closeMenu = () => {
    let commentMenu = document.querySelector('[data-id=menu-add-comment]');
    if(commentMenu && !commentMenu.contains(event.target)) {
      this.setState({ showCommentMenu: false });
      this.removeSelections();
    }
  };

  handleEditorMouseUp = e => {
    if (e.target.id !== 'addCommentButton') {
      if (this.state.showAddComment) {
        this.setState({ showAddComment: false });
        this.removeSelections();
      }
      if (!this.state.showCommentMenu && !this.state.showCommentModal && this.textHasBeenSelected()) {
        this.addSelections();
        this.addCommentButton();
      }
    }
  };

  closeModal = () => {
    this.removeSelections();
    this.setState({ showCommentModal: false });
  };

  showCommentModal = () => {
    this.position.top += 20;

    if ((this.position.bottom + 20) > window.innerHeight - 270) {
      this.position.top -= 250;
    }
    this.setState({
      showCommentModal: true,
      showAddComment: false,
      showCommentMenu: false
    });
  };

  textHasBeenSelected = () => {
    let selected = document.querySelector(`.${styles.selected}`);
    return selected || (window.getSelection().toString() !== '');
  };

  addCommentButton = () => {
    this.position.top -= 8;
    this.setState({ showAddComment: true });
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
      <div className={styles.feedbackEditorWrapper} onMouseUp={this.handleEditorMouseUp}>
        <div
          id="feedbackEditor"
          className={styles.feedbackEditor}
          dangerouslySetInnerHTML={{ __html: this.state.content }}
        />
        {this.state.showCommentModal
          ? <CommentModal
            position={this.position}
            handleSave={this.handleCreateFeedback}
            closeModal={this.closeModal}
            createFeedbackError={this.createFeedbackError}
            />
          : null}
        {this.state.showAddComment
          ? <AddCommentButton position={this.position.top} handleClick={this.showCommentModal.bind(this)} />
          : null}
        {this.state.showCommentMenu ?
          <CommentMenu
            position={this.position}
            showModal={this.showCommentModal.bind(this)}
            closeMenu={this.closeMenu}
          />
          : null}
        <FeedbackFlags feedback={this.props.feedback} />
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
  feedback: PropTypes.array,
  createFeedbackError: PropTypes.object
};

export default FeedbackEditor;
