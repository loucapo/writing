import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { MLEditor } from '../../MLComponents';
import { AddCommentButton } from '../index';

class FeedbackEditor extends Component {
  componentWillMount = () => {
    document.addEventListener('mousedown', this.handleMouseDown);
  };

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.handleMouseDown);
  };

  handleMouseUp = () => {
    let addCommentButton = document.getElementById('addCommentButton');
    if (this.textHasBeenSelected() && !addCommentButton) {
      this.addHighlights();
      this.addCommentButton();
    }
  };

  handleMouseDown = () => {
    let addCommentButton = document.getElementById('addCommentButton');
    if (addCommentButton) {
      addCommentButton.remove();
    }
  };

  textHasBeenSelected = () => (
    window.getSelection().toString() !== ''
  );

  addHighlights = () => {
    let userSelection = window.getSelection().getRangeAt(0);

    // Add highlights
    let safeRanges = this.getSafeRanges(userSelection);
    safeRanges.map((range, index) => {
      if (!range.collapsed) {
        let newNode = document.createElement('span');
        newNode.id = 'marker' + index;
        // newNode.classList.add(styles.highlight);
        newNode.classList.add('selected');
        range.surroundContents(newNode);
      }
    });
  };

  addCommentButton = () => {
    let selections = Array.from(document.getElementsByClassName('selected'));
    let top = selections[0].offsetTop;
    let parent = selections[0].offsetParent;

    let tempNode = document.createElement('span');
    parent.appendChild(tempNode);

    render(<AddCommentButton position={top} />, tempNode);

    // TODO: Remove entire span instead of just the class.
    selections.map(selection => {
      selection.classList.remove('selected');
    });
  };

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
        }
        else {
          xs.setStart(s[i], dangerous.startOffset);
          xs.setEndAfter(
              (s[i].nodeType === Node.TEXT_NODE)
                  ? s[i]
                  : s[i].lastChild
          );
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
        }
        else {
          xe.setStartBefore(
            (e[i].nodeType === Node.TEXT_NODE)
            ? e[i]
            : e[i].firstChild
          );
          xe.setEnd(e[i], dangerous.endOffset);
        }
        re.unshift(xe);
      }
    }

    // Middle -- the uncaptured middle
    let xm;
    if ((s.length > 0) && (e.length > 0)) {
      xm = document.createRange();
      xm.setStartAfter(s[s.length - 1]);
      xm.setEndBefore(e[e.length - 1]);
    }
    else {
      return [dangerous];
    }

    // Concat
    rs.push(xm);
    // response = rs.concat(re);

    // Send to Console
    return rs.concat(re);
  };

  render() {
    return (   
      <div onMouseUp={this.handleMouseUp}>
        <MLEditor content={this.props.content} editable={false} toolbarHidden={true} feedback={true} />
      </div>
    );
  }
}

FeedbackEditor.propTypes = {
  content: PropTypes.object
};

export default FeedbackEditor;
