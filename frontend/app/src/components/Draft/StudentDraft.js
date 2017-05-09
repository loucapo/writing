import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MLEditor from './../MLEditor/MLEditor';
import Header from './Header/Header';

import styles from './draft.css';

class StudentDraft extends Component {
  state = {
    draftIsEmpty: true
  }

  handleSave = (content) => {
    let text = content.blocks[0].text;
    this.setState({draftIsEmpty: text.length === 0});
  };

  render() {
    return (
      <div className={styles.page}>
        <Header draftIsEmpty={this.state.draftIsEmpty} />
        <div className={styles.container}>
          <MLEditor
            handleSave={this.handleSave}
            content={this.props.studentDraft}
            editable={true}
            toolbarHidden
          />
        </div>
      </div>
    );
  }
}

StudentDraft.propTypes = {
  studentDraft: PropTypes.object
};

export default StudentDraft;
