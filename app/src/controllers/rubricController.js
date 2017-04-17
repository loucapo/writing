module.exports = function(repository, sqlLibrary, logger) {
  return {
    async getRubrics(ctx) {
      logger.info('fetching all rubrics from repository');
      let rubrics = await repository(sqlLibrary.rubric, 'getRubrics', {});
      let rubCrit = await repository(sqlLibrary.rubric, 'getRubricCriteria', {});

      const rubricsWithCrit = rubrics.map(x => {
        x.criteria = rubCrit.filter(y=>y.rubricId === x.id).map(z => z.criteriaId);
        return x;
      });

      ctx.status = 200;
      ctx.body = {
        status: ctx.status,
        success: true,
        payload: rubricsWithCrit
      };
      return ctx;
    },
    async getRubricById(ctx) {
      logger.info('fetch rubric and all criteria by id from repository');
      let rubric = await repository(sqlLibrary.rubric, 'getRubricById', {id: ctx.params.id});

      ctx.status = 200;
      ctx.body = {
        status: ctx.status,
        success: true,
        payload: rubric
      };
      return ctx;
    }
  };
};
