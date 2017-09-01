import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './highlight.css';

class Highlight extends Component {
  render() {
    return (
      <div>
        <span className='highlight'>
          {this.props.block.getText()}
        </span>
        <div className={styles.flag}>
  <div className={styles.flagCaret}>
    <svg width="7px" height="12px" viewBox="0 0 7 12" version="1.1">
    <defs></defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="tooltip-caret" transform="translate(0.000000, 1.000000)">
            <g className={styles.triangle} fill="#faf2a9">
                <polygon points="0.85660335 9.76258269 0.85660335 0.143396646 6.76258269 4.95298967"></polygon>
            </g>
            <polyline className={styles.triangleOutline} stroke="#000000" points="1 0 7 5 1 10"></polyline>
        </g>
    </g>
</svg>
  </div>
  <div className={styles.flagTitle}>
  <svg width="24" height="24" viewBox="0 0 24 24">
  <path d="M20,2H4A1,1,0,0,0,3,3V17a1,1,0,0,0,1,1H7v4l4.94-4H20a1,1,0,0,0,1-1V3A1,1,0,0,0,20,2ZM19,16H11.24l-.54.45L9,17.82V16H5V4H19Z"/>
  <g>
    <path d="M16.52,9.05a.45.45,0,0,0-.45-.51H12.85s.46-1.27.73-2.08-.1-1.33-.59-.84L10.23,8.39a.77.77,0,0,0-.23.56v4.44a.17.17,0,0,0,.17.17H15a.79.79,0,0,0,.73-.48s.84-3,.84-3.08Z"/>
    <rect x="7.47" y="8.56" width="1.48" height="4.98"/>
  </g>
</svg>
  
  Good Job</div>
  
</div>


      </div>
    );
  }
}

Highlight.propTypes = {
  children: PropTypes.array
};

export default Highlight;
