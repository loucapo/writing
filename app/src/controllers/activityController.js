module.exports = function (domain, repository, path, logger) {
  return {
    async getActivity(ctx) {

      logger.info('Selecting activity ' + ctx.params.id + ' from repository');
      let activitySql = path.join(__dirname,`./../repositories/sql/activity.sql`);
      let activity = await repository(activitySql,'getActivityById', {id : ctx.params.id});

      ctx.status = 200;
      ctx.body = {
        status: ctx.status,
        success: true,
        payload: activity
      };
      return ctx;
    },

    // check if it exists, if not create it;
    async createOrReplaceActivity(ctx) {
      const body = ctx.request.body;
      body.createdById = ctx.state.user.user_data.id;
      logger.info(`Receiving payload from wk_serve: ${JSON.stringify(body)}`);
      let activitySql = path.join(__dirname,`./../repositories/sql/activity.sql`);
      let activity = await repository(activitySql,'getActivityById', {id:body.id});
      if(!activity || !activity[0]){
        logger.info(`Creating Activity from wk_serve payload: ${JSON.stringify(body)}`);
        activity = new domain.Activity();
        var event = activity.createNewActivity(body);
        await repository(activitySql, 'createActivity', event);
      }
      logger.debug(`Call to createActivity successful with following payload: ${JSON.stringify(body)}`);
      
      ctx.status = 200;
      ctx.body = {
        status: ctx.status,
        success: true       
      };
      return ctx;
    },

    async updateActivityPrompt(ctx) {
      const body = ctx.request.body;
      body.modifiedById = ctx.state.user.user_data.id;
      let activitySql = path.join(__dirname, './../repositories/sql/activity.sql');
      let props = await repository(activitySql, 'getActivityById', {id:ctx.params.id});
      if(!props) {
        ctx.errors = [`No activity found with id ${body.id}`];
        ctx.status = 500;
        return ctx;
      }
      var activity = new domain.Activity(props);
      var event = activity.updateActivityPrompt(body);

      await repository(activitySql, 'updateActivityPrompt', event);
      ctx.status = 200;
      ctx.body = {
        status: ctx.status,
        success: true
      };
      return ctx;
    },

    async updateActivity(ctx) {
      const body = ctx.request.body;
      body.modifiedById = ctx.state.user.user_data.id;
      let activitySql = path.join(__dirname, './../repositories/sql/activity.sql');
      let props = await repository(activitySql, 'getActivityById', {id:body.id});
      if(!props) {
        ctx.errors = [`No activity found with id ${body.id}`];
        ctx.status = 500;
        return ctx;
      }
      var activity = new domain.Activity(props);
      var event = activity.updateActivityPrompt(body);

      await repository(activitySql, 'updateActivityPrompt', event);
      ctx.status = 200;
      ctx.body = {
        status: ctx.status,
        success: true
      };
      return ctx;
    }

  };
};
