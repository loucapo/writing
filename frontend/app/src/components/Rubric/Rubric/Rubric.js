import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Criteria, RubricSave } from '../index';

import styles from './rubric.css';

class Rubric extends Component {
  state = {
    rubricScores: this.props.rubricScores || []
  };

  componentWillReceiveProps = newProps => {
    if (newProps.rubricScores !== this.props.rubricScores) {
      this.setState({ rubricScores: newProps.rubricScores });
    }
  };

  gradeIsComplete = () => {
    return this.state.rubricScores.length === 5;
  };

  gradeIsNotStarted = () => {
    return this.state.rubricScores.length === 0;
  };

  setRubricScore = (newScore) => {
    let newScores = this.state.rubricScores.slice();
    newScores = newScores.filter(rubricScore => rubricScore.criteriaId !== newScore.criteriaId);
    newScores.push(newScore);
    this.setState({rubricScores: newScores});
  };

  handleSave = () => {
    let rubric = this.props.rubric;
    this.props.updateRubricScores(
      this.props.studentActivityId,
      this.props.studentDraftId,
      rubric.rubricId,
      this.state.rubricScores
    );
  };

  render() {
    let rubric = this.props.rubric;

    return rubric ?
      <section className={styles.rubric} data-id="rubric">
        <div className={styles.table}>
          <header className={styles.header}>
            <div className={styles.headerTitle}>{rubric.title}</div>
            <div>1 - Falls Below Expectations</div>
            <div>2 - Nearly Meets Expectations</div>
            <div>3 - Meets Expectations</div>
            <div>4 - Exceeds Expectations</div>
          </header>
          {rubric.criteria.map(criteria => (
            <div key={criteria.criteriaId} className={styles.row}>
              <div className={styles.heading}>{criteria.title}</div>
              {criteria.rubricLevels.map((level, index) => (
                <Criteria
                  key={index}
                  criteriaId={criteria.criteriaId}
                  score={level.score}
                  content={level.content}
                  selected={level.selected}
                  setRubricScore={this.setRubricScore}
                />
              ))}
            </div>
          ))}
        </div>
        <RubricSave
          handleSave={this.handleSave}
          gradeIsComplete={this.gradeIsComplete()}
          gradeIsNotStarted={this.gradeIsNotStarted()}
        />
      </section>
    : null;
  }
}

Rubric.propTypes = {
  rubric: PropTypes.object,
  rubricScores: PropTypes.array,
  studentActivityId: PropTypes.string,
  studentDraftId: PropTypes.string,
  updateRubricScores: PropTypes.func,
  setUnsavedChanges: PropTypes.func
};

export default Rubric;
