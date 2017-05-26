module.exports = function(repository, sqlLibrary, StudentActivity, studentDraftBuilder) {
  return {
    async getStudentActivityARById(studentActivityId) {
      const keys = {studentActivityId};
      let props = await repository.query(sqlLibrary.studentActivity, 'getStudentActivityById', keys);
      //check for activity
      let studentActivity = props ? props[0] : undefined;
      if (!studentActivity) {
        throw new Error(`No activity found with id: ${studentActivityId}`);
      }
      studentActivity.studentDrafts = await studentDraftBuilder
        .getStudentDraftsByStudentActivityId(studentActivityId);

      return new StudentActivity(studentActivity);
    }
  };
};
