module.exports = function(Activity, repository, sqlLibrary, activityBuilder, logger) {
  return {
    async getActivity(ctx) {
      logger.info('Selecting activity ' + ctx.params.activityId + ' from repository');
      let activities = await repository.query(
        sqlLibrary.activity,
        'getActivityById',
        {activityId: ctx.params.activityId}
      );
      let activity = activities[0];
      if (!activity) {
        throw new Error(`No activity found with id: ${ctx.params.activityId}`);
      }

      ctx.status = 200;
      ctx.body = activity;
      return ctx;
    },

    // check if it exists, if not create it;
    //XXX the repository calls here need to be wrapped in a transaction.
    async createActivityIfNotCreated(ctx) {
      const command = ctx.request.body;
      command.title = 'Untitled Writing Activity'; //XXX we need to get this from somewhere
      command.activityId = ctx.params.activityId;
      command.createdBy = ctx.state.user.id;
      logger.info(`Receiving payload from wk_serve: ${JSON.stringify(command)}`);
      let activity = await repository.query(sqlLibrary.activity, 'getActivityById', {activityId: command.activityId});
      if (!activity || !activity[0]) {
        logger.info(`Creating Activity from wk_serve payload: ${JSON.stringify(command)}`);
        activity = new Activity();
        let event = activity.createNewActivity(command);
        await repository.query(sqlLibrary.activity, 'createActivity', event);
        let draftEvent = activity.addDraftToActivity({
          index: 0,
          activityId: command.activityId,
          createdBy: ctx.state.user.id
        });
        //XXX this should only happen if the previous repository call to create activity succeeds.  #transaction
        await repository.query(sqlLibrary.draft, 'addDraftToActivity', draftEvent);
      }
      logger.debug(`Call to createActivity successful with following payload: ${JSON.stringify(command)}`);

      ctx.status = 200;
      return ctx;
    },

    async updateActivityPrompt(ctx) {
      const command = ctx.request.body;
      command.activityId = ctx.params.activityId;
      command.modifiedBy = ctx.state.user.id;
      let activity = await activityBuilder.getActivityARById(command.activityId);
      let event = activity.updateActivityPrompt(command);

      await repository.query(sqlLibrary.activity, 'updateActivityPrompt', event);

      ctx.status = 200;
      return ctx;
    },

    async updateActivityTitle(ctx) {
      const command = ctx.request.body;
      command.activityId = ctx.params.activityId;
      command.modifiedBy = ctx.state.user.id;
      let activity = await activityBuilder.getActivityARById(command.activityId);
      let event = activity.updateActivityTitle(command);

      await repository.query(sqlLibrary.activity, 'updateActivityTitle', event);

      ctx.status = 200;
      return ctx;
    },

    async updateActivityRubric(ctx) {
      const command = ctx.request.body;
      command.activityId = ctx.params.activityId;
      command.modifiedBy = ctx.state.user.id;
      let props = await repository.query(sqlLibrary.activity, 'getActivityById', {activityId: command.activityId});
      if (!props) {
        ctx.errors = [`No activity found with id ${command.activityId}`];
        ctx.status = 500;
        return ctx;
      }

      let activity = new Activity(props);
      let event = activity.updateActivityRubric(command);
      event.rubricId = event.rubricId.length > 16 ? event.rubricId : null;
      await repository.query(sqlLibrary.activity, 'updateActivityRubric', event);
      ctx.status = 200;
      return ctx;
    }
  };
};
