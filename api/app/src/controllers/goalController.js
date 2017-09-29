module.exports = function(repository, sqlLibrary, logger) {
  return {
    async getGoals(ctx) {
      logger.info('fetching all goals');
      let goals = await repository.query(sqlLibrary.goal, 'getGoals', {});

      ctx.status = 200;
      ctx.body = goals;
      return ctx;
    }
  };
};
