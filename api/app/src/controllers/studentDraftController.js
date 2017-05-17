module.exports = function(domain, repository, sqlLibrary, moment, domainBuilders, logger) {
  return {
    // check if it exists, if not create it;
    async createStudentDraftIfNotThere(ctx) {
      let command = {
        studentActivityId: ctx.params.studentActivityId,
        draftId: ctx.params.draftId,
        createdById: ctx.state.user.id,
        createdDate: moment().toISOString()
      };
      let studentDraft = await repository.query(
        sqlLibrary.studentDraft,
        'getStudentDraftByStudentActivityId',
        {studentActivityId: command.studentActivityId, draftId: command.draftId});

      if (!studentDraft || !studentDraft[0]) {
        logger.info(`Creating studentDraft from payload: ${JSON.stringify(command)}`);
        const studentActivity = new domain.StudentActivity();
        let event = studentActivity.createNewStudentDraft(command);
        await repository.query(sqlLibrary.studentDraft, 'createStudentDraft', event);
      }
      logger.debug(`Call to createStudentDraft successful with following payload: ${JSON.stringify(command)}`);

      ctx.status = 200;
      return ctx;
    },

    async getStudentDraftByStudentActivityId(ctx) {
      const studentDraft = await repository.query(
        sqlLibrary.studentDraft,
        'getStudentDraftByStudentActivityId',
        {studentActivityId: ctx.params.studentActivityId, draftId: ctx.params.draftId});
      ctx.status = 200;
      ctx.body = studentDraft;
      return ctx;
    }
  };
};
