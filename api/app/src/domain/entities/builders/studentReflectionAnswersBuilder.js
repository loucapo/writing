module.exports = function(repository, sqlLibrary, StudentReflectionAnswer) {
  return {
    async getStudentReflectionQuestionsByDraftsId(studentDraftId) {
      const keys = {studentDraftId};
      let props = await repository.query(sqlLibrary.studentDraft, 'getStudentReflectionAnswers', keys);
      return props ? props.map(x => new StudentReflectionAnswer(x)) : [];
    }
  };
};
