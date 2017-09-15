module.exports = function(repository, sqlLibrary, Feedback) {
  return {
    async getFeedbackByStudentDraftId(studentDraftId) {
      const keys = { studentDraftId };
      let props = await repository.query(sqlLibrary.feedback, 'getFeedback', keys);
      return props ? props.map(x => new Feedback(x)) : [];
    }
  };
};
