import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MLEditor } from '../../MLComponents';
import { AddCommentButton } from '../index';
import { CommentModal } from '../index';
import styles from './feedbackEditor.css';

class FeedbackEditor extends Component {
  position;
  state = {
    showCommentModal: false,
    showAddComment: false
  };

  // FixMe: modal positioning

  removeSelections = () => {
    // FixMe: Remove entire span instead of just the class.
    let selections = Array.from(document.getElementsByClassName(styles.selected));
    selections.map(selection => {
      selection.classList.remove(styles.selected);
      // selection.replaceWith(selection.innerHTML);
    });
  };

  handleRightClick = (/*e*/) => {
    // e.preventDefault();
    // console.log('right click happened');
    // this.handleMouseUp();
  };

  handleMouseUp = (e) => {
    console.log('handle mouse up');
    if (e.target.id !== 'addCommentButton') {
      if (this.state.showAddComment) {
        this.setState({
          showAddComment: false
        });
        this.removeSelections();
      }
      if (this.textHasBeenSelected()) {
        this.addHighlights();
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
    console.log('show modal');
    let highlights = document.querySelectorAll(`.${styles.selected}`);
    let selected = highlights[highlights.length - 1];
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

  addHighlights = () => {
    console.log('add highlights');
    let userSelection = window.getSelection().getRangeAt(0);

    // Add highlights
    let safeRanges = this.getSafeRanges(userSelection);
    safeRanges.map((range/*, index*/) => {
      if (!range.collapsed) {
        let newNode = document.createElement('span');
        // newNode.id = 'marker' + index;
        newNode.classList.add(styles.selected);
        range.surroundContents(newNode);
      }
    });
  };

  addCommentButton = () => {
    console.log('add comment button');
    let selections = document.querySelectorAll(`.${styles.selected}`);
    let top = selections[0].getBoundingClientRect().top;
    this.position.top = top;

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
  elementContainsSelection = (element) => {
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
    } else if ( (selected = document.selection) && selected.type !== 'Control') {
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
        <MLEditor content={this.props.content} editable={false} toolbarHidden={true} onFeedbackEditor={true} />
        {this.state.showCommentModal
          ? <CommentModal position={this.position} closeModal={this.closeModal} />
          : null
        }
        {this.state.showAddComment
          ? <AddCommentButton position={this.position.top} handleClick={this.showCommentModal.bind(this)} />
          : null
        }
      </div>
    );
  }
}

FeedbackEditor.propTypes = {
  content: PropTypes.object
};

export default FeedbackEditor;
