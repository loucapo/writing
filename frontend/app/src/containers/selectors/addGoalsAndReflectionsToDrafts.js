export default state => {
  return state.drafts
    .filter(draft => draft.activityId === state.auth.activity.activityId)
    .map(draft => {
      let goals = [];
      let studentReflectionQuestions = [];
      if (draft.goals && state.criteria.length > 0) {
        goals = draft.goals.map(goalId => state.criteria.find(criteria => criteria.criteriaId === goalId).title);
      }
      if (draft.studentReflectionQuestions && state.reflectionQuestions.length > 0) {
        studentReflectionQuestions = draft.studentReflectionQuestions.map(questionId => {
          const question = state.reflectionQuestions.find(reflectionQuestion =>
            reflectionQuestion.studentReflectionQuestionId === questionId
          );
          return {
            studentReflectionQuestionId: question.studentReflectionQuestionId,
            question: question.question,
            questionType: question.questionType
          };
        });
      }
      return { ...draft, goals, studentReflectionQuestions };
    })
    .sort((draftA, draftB) => draftB.index - draftA.index);
};
