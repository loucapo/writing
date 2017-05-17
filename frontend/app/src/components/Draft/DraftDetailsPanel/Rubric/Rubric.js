import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MLIcon from 'ml-react-cdl-icons';

import styles from './rubric.css';

class Rubric extends Component {
  state = {
    column: 1
  };

  headings = [
    this.props.rubric.title,
    '1 - Falls Below Expectations',
    '2 - Nearly Meets Expectations',
    '3 - Meets Expectations',
    '4 - Exceeds Expectations'
  ];

  goToColumn = (column) => {
    if(column < 1) {return;}
    else if(column > this.props.rubric.criteria.length - 1) {return;}
    this.setState({
      column
    });
    return false;
  };

  render() {
    return this.props.rubric ? (
      <section data-id="rubric-preview" className={styles.table}>
        <div className={styles.row}>
          <div className={styles.headerTitle}>
            {this.headings[0]}
          </div>
          <div className={styles.header}>
            <span>{this.headings[this.state.column]}</span>
            <span className={styles.headerLinks}>
              {this.state.column > 1 ?
                <a onClick={this.goToColumn.bind(this, this.state.column - 1)}>
                  <MLIcon
                    title="Previous column"
                    type="chevron_left"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    className={styles.icon} />
                </a> :
                <MLIcon
                  title="Previous column"
                  type="chevron_left"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  className={styles.disabledIcon} />
              }
            </span>
            <span className={styles.headerLinks}>
              {this.state.column < this.props.rubric.criteria.length - 1 ?
                <a onClick={this.goToColumn.bind(this, this.state.column + 1)}>
                  <MLIcon
                    title="Next column"
                    type="chevron_right"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    className={styles.icon} />
                </a> :
                <MLIcon
                  title="Next column"
                  type="chevron_right"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  className={styles.disabledIcon} />
              }
            </span>
          </div>
        </div>
        {this.props.rubric.criteria.map((item, idx) => {
          return (
            <div key={idx} className={styles.row}>
              <div className={styles.header}>{item.title}</div>
              <div className={styles.cell}>{item['rubricLevel' + this.state.column]}</div>
            </div>
          );
        })}
      </section>
    ) : null;
  }
}

Rubric.propTypes = {
  rubric: PropTypes.object
};

export default Rubric;
