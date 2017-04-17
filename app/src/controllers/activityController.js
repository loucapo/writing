module.exports = function(domain, repository, sqlLibrary, domainBuilders, logger) {
  return {
    async getActivity(ctx) {
      logger.info('Selecting activity ' + ctx.params.id + ' from repository');
      let activities = await repository(sqlLibrary.activity, 'getActivityById', {id: ctx.params.id});
      let activity = activities[0];
      if (!activity) {
        throw new Error(`No activity found with id: ${ctx.params.id}`);
      }

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
      let activity = await repository(sqlLibrary.activity, 'getActivityById', {id: body.id});
      if (!activity || !activity[0]) {
        logger.info(`Creating Activity from wk_serve payload: ${JSON.stringify(body)}`);
        activity = new domain.Activity();
        let event = activity.createNewActivity(body);
        await repository(sqlLibrary.activity, 'createActivity', event);
        let draftEvent = activity.addDraftToActivity({
          index: 0,
          createdById: ctx.state.user.user_data.id
        });

        await repository(sqlLibrary.draft, 'addDraftToActivity', draftEvent);

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
      let activity = await domainBuilders.ActivityBuilder.getActivityARById(ctx.params.id);
      let event = activity.updateActivityPrompt(body);

      await repository(sqlLibrary.activity, 'updateActivityPrompt', event);

      ctx.status = 200;
      ctx.body = {
        status: ctx.status,
        success: true
      };
      return ctx;
    },

    async updateActivityRubric(ctx) {
      const body = ctx.request.body;
      body.modifiedById = ctx.state.user.user_data.id;
      let props = await repository(sqlLibrary.activity, 'getActivityById', {id: ctx.params.id});
      if (!props) {
        ctx.errors = [`No activity found with id ${ctx.params.id}`];
        ctx.status = 500;
        return ctx;
      }

      let activity = new domain.Activity(props);
      let event = activity.updateActivityRubric(body);
      event.rubricId = event.rubricId.length > 16 ? event.rubricId : null;
      await repository(sqlLibrary.activity, 'updateActivityRubric', event);
      ctx.status = 200;
      ctx.body = {
        status: ctx.status,
        success: true
      };
      return ctx;
    }
  };
};
