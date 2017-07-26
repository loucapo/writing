export default state => {
  let newRubric;
  let rubric = state.rubric.find(stateRubric => stateRubric.rubricId === state.activities[0].rubricId);
  if (rubric && rubric.criteria) {
    newRubric = { ...rubric };
    newRubric.criteria = rubric.criteria.map(rubricCriteria => {
      let criteria = state.criteria.find(stateCriteria => rubricCriteria === stateCriteria.criteriaId);

      let score = state.rubricScores.find(rubricScore => rubricScore.criteriaId === criteria.criteriaId);

      criteria.rubricLevels = [
        {score: '1', content: criteria.rubricLevel1, selected: (score && score.score === '1')},
        {score: '2', content: criteria.rubricLevel2, selected: (score && score.score === '2')},
        {score: '3', content: criteria.rubricLevel3, selected: (score && score.score === '3')},
        {score: '4', content: criteria.rubricLevel4, selected: (score && score.score === '4')}
      ];

      return criteria;
    });
  }

  return newRubric;
};
