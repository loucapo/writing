import React from 'react';
import PropTypes from 'prop-types';

import styles from './rubric.css';

const Rubric = ({rubric}) => {
  return rubric ? (
    <section data-id="rubric-preview" className={styles.table}>
      <header className={styles.row}>
        <div className={styles.headerTitle}>{rubric.title}</div>
        <div className={styles.header}>1 - Falls Below Expectations</div>
        <div className={styles.header}>2 - Nearly Meets Expectations</div>
        <div className={styles.header}>3 - Meets Expectations</div>
        <div className={styles.header}>4 - Exceeds Expectations</div>
      </header>
      {rubric.criteria.map((item, idx) => {
        return (
          <div key={idx} className={styles.row}>
            <div className={styles.header}>{item.title}</div>
            <div className={styles.cell}>{item.rubricLevel1}</div>
            <div className={styles.cell}>{item.rubricLevel2}</div>
            <div className={styles.cell}>{item.rubricLevel3}</div>
            <div className={styles.cell}>{item.rubricLevel4}</div>
          </div>
        );
      })}
    </section>
  ) : null;

};

Rubric.propTypes = {
  rubric: PropTypes.object
};

export default Rubric;
