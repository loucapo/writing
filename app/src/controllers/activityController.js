module.exports = function (repository, path, logger) {
  return {
    async activity(ctx) {
      logger.info('Selecting activity ' + ctx.params.id + ' from repository');
      let activitySql = path.join(__dirname,`./../repositories/sql/activity.sql`);
      let activity = await repository(activitySql,'get_activity_by_id', ctx.params);

      ctx.status = 200;
      ctx.body = {
        status: ctx.status,
        success: true,
        data: activity
      };
      return ctx;
    },

    // check if it exists, if not create it;
    async createActivity(ctx) {
      const body = ctx.request.body;
      logger.info(`Receiving payload from wk_serve: ${body}`);
      let activitySql = path.join(__dirname,`./../repositories/sql/activity.sql`);
      let activity = await repository(activitySql,'get_activity_by_id', {id:body.id});
      if(!activity || !activity[0]){
        logger.info(`Creating Activity from wk_serve payload: ${body}`);
        await repository(activitySql,'create_new_activity_from_jwt', body);
      }
      logger.debug(`Call to createActivity successful with following payload: ${body}`);
      
      ctx.status = 200;
      ctx.body = {
        status: ctx.status,
        success: true
      };
      return ctx;
    }
  };
};
