module.exports = function(domain, repository, domainBuilders, sqlLibrary) {
  return {
    async addDraftToActivity(ctx) {
      const body = ctx.request.body;
      body.modifiedById = ctx.state.user.user_data.id;
      let activity = await domainBuilders.ActivityBuilder.getActivityARById(body.activityId);
      let event = activity.addDraftToActivity(body);

      await repository(sqlLibrary.draft, 'addDraftToActivity', event);

      ctx.status = 200;
      ctx.body = {
        status: ctx.status,
        success: true
      };
      return ctx;
    },

    async removeDraftFromActivity(ctx) {
      const body = ctx.request.body;
      body.modifiedById = ctx.state.user.user_data.id;
      let activity = await domainBuilders.ActivityBuilder.getActivityARById(body.activityId);
      let event = activity.removeDraftFromActivity(body);

      // this is going to be dependant on how we persist
      await repository(sqlLibrary.draft, 'removeDraftFromActivity', event);

      ctx.status = 200;
      ctx.body = {
        status: ctx.status,
        success: true
      };
      return ctx;
    },

    async updateDraftInstructions(ctx) {
      const body = ctx.request.body;
      body.modifiedById = ctx.state.user.user_data.id;
      let activity = await domainBuilders.ActivityBuilder.getActivityARById(body.activityId);
      let event = activity.updateDraftInstructions(body);

      await repository(sqlLibrary.draft, 'updateDraftInstructions', event);

      ctx.status = 200;
      ctx.body = {
        status: ctx.status,
        success: true
      };
      return ctx;
    },

    async getDraftsByActivityId(ctx) {
      let drafts = await repository(sqlLibrary.draft, 'getDraftsByActivityId', {id: ctx.params.activityId});

      ctx.status = 200;
      ctx.body = {
        status: ctx.status,
        success: true,
        payload: drafts
      };
      return ctx;
    }
  };
};
