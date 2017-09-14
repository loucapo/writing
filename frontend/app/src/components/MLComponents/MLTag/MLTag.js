import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MLIcon from 'ml-react-cdl-icons';

import styles from './mlTag.css';

class MLTag extends Component {

  render() {
    return (
      <div className={styles.tagWrapper}>
        <div id="commentTag" className={styles.tag} contentEditable={false}>
          <div data-id="tag-text" className={styles.tagText} contentEditable={false}>
            {this.props.text}
          </div>
          <div className={styles.tagClose} contentEditable={false}>
            <a data-id="delete-tag" onClick={this.props.deleteTag}>
              <MLIcon
                className={styles.closeIcon}
                title="close"
                type="x"
                width="18"
                height="19"
                viewBox="0 0 24 24"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}


MLTag.propTypes = {
  text: PropTypes.string,
  deleteTag: PropTypes.func
};

export default MLTag;
