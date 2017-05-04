module.exports = function(domain, repository, sqlLibrary, domainBuilders, logger) {
  return {
    // check if it exists, if not create it;
    async createStudentActivityIfNotCreated(ctx) {
      const command = ctx.request.body;
      command.activityId = ctx.params.activityId;
      command.createdById = ctx.state.user.user_data.id;
      command.studentId = ctx.state.user.user_data.id;
      logger.info(`Receiving payload from wk_serve: ${JSON.stringify(command)}`);
      let studentActivity = await repository.query(
        sqlLibrary.studentActivity,
        'getStudentActivity',
        {activityId: command.activityId, studentId: command.studentId});
      if (!studentActivity || !studentActivity[0]) {
        logger.info(`Creating studentActivity from wk_serve payload: ${JSON.stringify(command)}`);
        studentActivity = new domain.StudentActivity();
        let event = studentActivity.createNewStudentActivity(command);
        await repository.query(sqlLibrary.studentActivity, 'createStudentActivity', event);
      }
      logger.debug(`Call to createStudentActivity successful with following payload: ${JSON.stringify(command)}`);

      ctx.status = 200;
      return ctx;
    },

    async getStudentActivity(ctx) {
      const userId = ctx.state.user.user_data.id;
      const studentActivity = await repository.query(
        sqlLibrary.studentActivity,
        'getStudentActivity',
        {activityId: ctx.params.activityId, studentId: userId});
      ctx.status = 200;
      ctx.body = studentActivity;
      return ctx;
    }
  };
};
