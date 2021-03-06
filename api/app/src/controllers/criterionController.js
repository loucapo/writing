module.exports = function(repository, sqlLibrary, logger) {
  return {
    async getCriteria(ctx) {
      logger.info('fetching all criteria');
      let criteria = await repository.query(sqlLibrary.criterion, 'getCriteria', {});

      ctx.status = 200;
      ctx.body = criteria;
      return ctx;
    }
  };
};
