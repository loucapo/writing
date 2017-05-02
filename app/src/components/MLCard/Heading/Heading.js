import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MLIcon from 'ml-react-cdl-icons';

import styles from './heading.css';

class Heading extends Component {
  render = () => {
    let disabledClass = (this.props.disabled) ? ` ${styles.collapseIconDisabled}` : '';
    let iconClass = `${styles.collapseIcon}${disabledClass}`;

    return (
      <h1 className={styles.heading} data-id={`${this.props.type}-section`}>
        <span>
          <MLIcon
            className={iconClass}
            title="minus"
            type="minus"
            width="12"
            height="12"
            viewBox="0 0 24 24"
          />
          <span className={styles.headingText}>
            {this.props.title}
          </span>
        </span>

        {this.props.options}
      </h1>
    );
  };
}

Heading.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  options: PropTypes.object,
  disabled: PropTypes.bool
};

export default Heading;
