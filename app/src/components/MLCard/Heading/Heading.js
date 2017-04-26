import React, {Component} from 'react';
import PropTypes from 'prop-types';
import InstructorControlsContainer from '../../InstructorControlsContainer/InstructorControlsContainer';
import MLIcon from 'ml-react-cdl-icons';

import styles from './heading.css';

class Heading extends Component {
  render = () => {
    return (
      <h1 className={styles.heading} data-id={`${this.props.type}-section`}>
        <span>
          <MLIcon
            className={styles.collapseIcon}
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

        <InstructorControlsContainer role={this.props.role}>
          {this.props.options}
        </InstructorControlsContainer>
      </h1>
    );
  };
}

Heading.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  role: PropTypes.string,
  options: PropTypes.object
};

export default Heading;
