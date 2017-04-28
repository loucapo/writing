module.exports = function(repository, sqlLibrary, logger) {
  return {
    async getStudentReflectionQuestions(ctx) {
      logger.info('fetching all Student Reflection Questions');
      let criteria = await repository.query(sqlLibrary.studentReflectionQuestions, 'getStudentReflectionQuestions', {});

      ctx.status = 200;
      ctx.body = criteria;
      return ctx;
    }
  };
};
