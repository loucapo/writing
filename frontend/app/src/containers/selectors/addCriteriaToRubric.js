export default state => {
  let newRubric;
  let rubric = state.rubric.find(stateRubric => stateRubric.rubricId === state.activities[0].rubricId);
  if (rubric && rubric.criteria) {
    newRubric = { ...rubric };
    newRubric.criteria = rubric.criteria.map(rubricCriterion => {
      let criterion = state.criteria.find(stateCriterion => rubricCriterion === stateCriterion.criterionId);

      let score = state.rubricScores.find(rubricScore => rubricScore.criterionId === criterion.criterionId);

      criterion.rubricLevels = [
        {score: '1', content: criterion.rubricLevel1, selected: (score && score.score === '1')},
        {score: '2', content: criterion.rubricLevel2, selected: (score && score.score === '2')},
        {score: '3', content: criterion.rubricLevel3, selected: (score && score.score === '3')},
        {score: '4', content: criterion.rubricLevel4, selected: (score && score.score === '4')}
      ];

      return criterion;
    });
  }

  return newRubric;
};
