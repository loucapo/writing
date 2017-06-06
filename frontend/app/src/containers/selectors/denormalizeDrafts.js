export default (state) => {
  return state.drafts.filter(x => x.activityId === state.auth.activity.activityId)
    .map(x => {
      let goals = [];
      let studentReflectionQuestions = [];
      if (x.goals && state.criteria.length > 0) {
        goals = x.goals.map(y => state.criteria.find(z => z.criteriaId === y).title);
      }
      if (x.studentReflectionQuestions && state.reflectionQuestions.length > 0) {
        studentReflectionQuestions = x.studentReflectionQuestions
          .map(y => {
            const question = state.reflectionQuestions.find(z => z.studentReflectionQuestionId === y);
            return {question: question.question, questionType: question.questionType};
          });
      }
      return {...x, goals, studentReflectionQuestions};
    }).sort((a, b) => a.index - b.index);
};
