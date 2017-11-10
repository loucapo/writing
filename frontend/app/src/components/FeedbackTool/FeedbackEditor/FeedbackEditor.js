import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { FeedbackMenu, CommentModal, FeedbackFlags, CommentMenu } from '../index';
import styles from './feedbackEditor.css';

class FeedbackEditor extends Component {
  position;

  state = {
    showCommentModal: null,
    showFeedbackMenu: false,
    showCommentMenu: false,
    saving: false,
    removing: false,
    content: this.props.content,
    draftHasGoals: false
  };

  componentWillReceiveProps = (nextProps) => {

    const newFeedback = !_.isEqual(this.props.lastFeedback, nextProps.lastFeedback);
    const removedFeedbackIds = _.map(_.differenceBy(this.props.feedback, nextProps.feedback, 'feedbackId'), 'feedbackId');

    if((this.state.saving && newFeedback) || (this.state.removing && removedFeedbackIds.length > 0)) {

      if (this.state.saving) {
        this.addHighlights(nextProps.lastFeedback);
      }
      if (this.state.removing) {
        this.removeHighlights(removedFeedbackIds);
      }
      this.setState({
        showCommentModal: null,
        saving: false,
        removing: false,
        content: document.getElementsByClassName(styles.feedbackEditor)[0].innerHTML
      }, () => {
        this.props.updateFeedbackPaper(this.props.studentActivityId, this.props.studentDraftId, this.state.content);
      });
    }
  };

  componentDidMount = () => {
    document.body.addEventListener('contextmenu', this.handleRightClick.bind(this));
  };

  componentWillUnmount = () => {
    document.body.removeEventListener('contextmenu', this.handleRightClick.bind(this));
  };

  handleSave = (comment, level, isHeaderShown, goalId, editorMarkId) => {
    this.setState({ saving: true }, () => {
      this.props.createFeedback(
        this.props.studentActivityId,
        this.props.studentDraftId,
        comment,
        level,
        isHeaderShown,
        goalId,
        editorMarkId
      );
    });
  };

  handleDeleteFeedback = (feedbackId) => {
    this.setState({ removing: true }, () => {
      this.props.deleteFeedback(this.props.studentActivityId, this.props.studentDraftId, feedbackId);
    });
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
    let selecteds = Array.from(document.querySelectorAll(`.${styles.selected}`));
    let selectedParent = document.querySelector(`.${styles.feedbackEditorWrapper}`);
    // find upper and lowermost selected
    let firstSelected = null;
    let lastSelected = null;
    let firstSelectedRect = null;
    let lastSelectedRect = null;
    selecteds.map(selected => {
      let selectedRect = selected.getBoundingClientRect();
      if (firstSelected === null || (selectedRect.top < firstSelectedRect.top)) {
        firstSelected = selected;
        firstSelectedRect = firstSelected.getBoundingClientRect();
      }
      if (lastSelected === null || (selectedRect.bottom > lastSelectedRect.bottom)) {
        lastSelected = selected;
        lastSelectedRect = lastSelected.getBoundingClientRect();
      }
    });
    this.position = {
      top: firstSelected.offsetTop - 60,
      left: firstSelectedRect.left,
      bottom: lastSelectedRect.bottom,
      y: firstSelectedRect.top,
      height: lastSelectedRect.bottom - firstSelectedRect.top,
      parentY: selectedParent.getBoundingClientRect().top
    };
  };

  removeSelections = () => {
    let selections = Array.from(document.getElementsByClassName(styles.selected));
    while (selections.length > 0) {
      const selection = selections[0];
      selection.parentNode.replaceChild(
        document.createRange().createContextualFragment(selection.innerHTML),
        selection
      );
      selections = Array.from(document.getElementsByClassName(styles.selected));
    }
  };

  removeHighlights = (removedFeedbackIds) => {
    removedFeedbackIds.map(removedFeedbackId => {
      let highlights = document.querySelectorAll('.' + styles.highlight + `[data-feedback-id="${removedFeedbackId}"]`);
      while (highlights.length > 0) {
        const highlight = highlights[0];
        highlight.parentNode.replaceChild(
          document.createRange().createContextualFragment(highlight.innerHTML),
          highlight
        );
        highlights = document.querySelectorAll('.' + styles.highlight + `[data-feedback-id="${removedFeedbackId}"]`);
      }
    });
    window.getSelection().removeAllRanges();
  };

  addHighlights = (feedback) => {
    let selections = Array.from(document.getElementsByClassName(styles.selected));
    selections.map(selection => {
      selection.classList.remove(styles.selected);
      selection.classList.add(styles.highlight);
      if (feedback.level === 3) {
        selection.classList.add(styles.highlightGreen);
      } else if (feedback.editingMarkId) {
        selection.classList.add(styles.highlightOrange);
      }
      selection.setAttribute('data-feedback-id', feedback.feedbackId);
    });
  };

  handleRightClick = e => {
    let selected = document.querySelector(`.${styles.selected}`);
    if (selected) {
      e.preventDefault();
      this.position.top += 20;
      this.setState({
        showCommentMenu: true,
        showFeedbackMenu: false
      });
    }
  };

  closeMenu = () => {
    this.setState({ showCommentMenu: false });
    this.removeSelections();
  };

  handleEditorMouseUp = e => {
    if (!e.target.classList.contains('feedbackButton')) {
      // TODO: verify if this clicking anywhere outside of the editor should cancel the commenting
      if (this.state.showFeedbackMenu) {
        this.setState({ showFeedbackMenu: null });
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
    this.setState({ showCommentModal: null });
  };

  showCommentModal = (whichModal) => {
    this.position.top += 20;

    if ((this.position.bottom + 20) > window.innerHeight - 270) {
      this.position.top -= 250;
    }
    this.setState({
      showCommentModal: whichModal,
      showFeedbackMenu: false,
      showCommentMenu: false
    });
  };

  textHasBeenSelected = () => {
    let selected = document.querySelector(`.${styles.selected}`);
    return selected || (window.getSelection().toString() !== '');
  };

  addCommentButton = () => {
    this.position.top -= 8;
    this.setState({ showFeedbackMenu: true });
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
    const draftHasGoals = this.props.draftGoals && this.props.draftGoals.length > 0;

    return (
      <div className={styles.feedbackEditorWrapper} onMouseUp={this.handleEditorMouseUp}>
        <div
          className={styles.feedbackEditor}
          dangerouslySetInnerHTML={{ __html: this.state.content }}
        />
        {this.state.showCommentModal
          ? <CommentModal
            position={this.position}
            handleSave={this.handleSave}
            closeModal={this.closeModal}
            createFeedbackError={this.createFeedbackError}
            modalType={this.state.showCommentModal}
            editingMarks={this.props.editingMarks}
            draftGoals={this.props.draftGoals}
          />
          : null}
        {this.state.showFeedbackMenu ?
          <FeedbackMenu
            position={this.position.top}
            handleClick={this.showCommentModal.bind(this)}
            showDraftGoals={draftHasGoals}
          />
          : null}
        {this.state.showCommentMenu ?
          <CommentMenu
            position={this.position}
            showModal={this.showCommentModal.bind(this)}
            closeMenu={this.closeMenu}
            showDraftGoals={draftHasGoals}
          />
          : null}
        <FeedbackFlags
          feedback={this.props.feedback}
          isDisplay={false}
          handleDeleteFeedback={this.handleDeleteFeedback}
        />
      </div>
    );
  }
}

FeedbackEditor.propTypes = {
  studentActivityId: PropTypes.string,
  studentDraftId: PropTypes.string,
  content: PropTypes.string,
  updateFeedbackPaper: PropTypes.func,
  deleteFeedback: PropTypes.func,
  lastFeedback: PropTypes.object,
  feedback: PropTypes.array,
  createFeedback: PropTypes.func,
  createFeedbackError: PropTypes.object,
  editingMarks: PropTypes.array,
  draftGoals: PropTypes.array
};

export default FeedbackEditor;
