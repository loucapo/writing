export default state => {
<<<<<<< HEAD
  const activityId = (state.activities[0] && state.activities[0].activityId) || (state.auth.activity && state.auth.activity.activityId);
=======
  const activity = state.activities[0];
  const activityId = (activity && activity.activityId) || (state.auth.activity && state.auth.activity.activityId);
>>>>>>> cb9f44d4ec802d5b85431a3bc910fd064c921af9

  return state.drafts
    .filter(draft => draft.activityId === activityId)
    .map(draft => {
      let goals = [];
      let studentReflectionQuestions = [];
      if (draft.goals && state.goal.length > 0) {
        goals = draft.goals.map(goalId => state.goal.find(goal => goal.goalId === goalId).title);
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
    .sort((draftA, draftB) => draftA.index - draftB.index);
};
