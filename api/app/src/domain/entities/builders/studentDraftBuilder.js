module.exports = function(repository, studentReflectionAnswersBuilder, sqlLibrary, StudentDraft, feedbackBuilder) {
  return {
    async getStudentDraftsByStudentActivityId(studentActivityId) {
      const keys = {studentActivityId};
      let props = await repository.query(sqlLibrary.studentDraft, 'getStudentDraftsByStudentActivityId', keys);
      let studentDrafts = props ? props.map(x => new StudentDraft(x)) : [];
      if (studentDrafts.length > 0) {
        for (let studentDraft of studentDrafts) {
          studentDraft.studentReflectionAnswers =
            await studentReflectionAnswersBuilder
              .getStudentReflectionQuestionsByDraftsId(studentDraft.studentDraftId);

          studentDraft.feedback = await feedbackBuilder.getFeedbackByStudentDraftId(studentDraft.studentDraftId);
        }
      }
      return studentDrafts;
    }
  };
};
