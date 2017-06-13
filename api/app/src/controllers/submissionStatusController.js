module.exports = function(repository, sqlLibrary, logger) {
  return {
    async getSubmissionStatus(ctx) {
      logger.info('Selecting SubmissionStatus for ' + ctx.params.draftId + ' from repository');
      let submissionStatus = await repository.query(
        sqlLibrary.submissionStatus,
        'getSubmissionStatusByDraftId', {
          draftId: ctx.params.draftId
        }
      );

      ctx.status = 200;
      ctx.body = submissionStatus;
      return ctx;
    }
  };
};
