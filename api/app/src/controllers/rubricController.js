module.exports = function(repository, sqlLibrary, logger) {
  return {
    async getRubrics(ctx) {
      logger.info('fetching all rubrics from repository');
      let rubrics = await repository.query(sqlLibrary.rubric, 'getRubrics', {});
      let rubCrit = await repository.query(sqlLibrary.rubric, 'getRubricCriteria', {});
      const rubricsWithCrit = rubrics.map(x => {
        x.criteria = rubCrit.filter(y=>y.rubricId === x.rubricId).map(z => z.criterionId);
        return x;
      });

      ctx.status = 200;
      ctx.body = rubricsWithCrit;
      return ctx;
    },
    async getRubricById(ctx) {
      logger.info('fetch rubric and all criteria by id from repository');
      let rubric = await repository.query(sqlLibrary.rubric, 'getRubricById', {rubricId: ctx.params.rubricId});

      ctx.status = 200;
      ctx.body = rubric;
      return ctx;
    }
  };
};
