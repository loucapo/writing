module.exports = function(repository, sqlLibrary, logger) {
  return {
    async getCriteria(ctx) {
      logger.info('fetching all criteria');
      let criteria = await repository(sqlLibrary.criteria, 'getCriteria', {});

      ctx.status = 200;
      ctx.body = {
        status: ctx.status,
        success: true,
        payload: criteria
      };
      return ctx;
    }
  };
};
