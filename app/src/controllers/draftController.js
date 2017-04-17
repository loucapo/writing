module.exports = function(domain, repository, domainBuilders, sqlLibrary) {
  return {
    async addDraftToActivity(ctx) {
      const body = ctx.request.body;
      body.createdById = ctx.state.user.user_data.id;
      let activity = await domainBuilders.ActivityBuilder.getActivityARById(body.activityId);
      let event = activity.addDraftToActivity(body);
      await repository(sqlLibrary.draft, 'addDraftToActivity', event);

      ctx.status = 200;
      ctx.body = {
        status: ctx.status,
        success: true,
        payload: {id: event.id}
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

    async setDraftGoals(ctx) {
      const body = ctx.request.body;
      let activity = await domainBuilders.ActivityBuilder.getActivityARById(ctx.params.activityid);
      let event = activity.setDraftGoals(body);
      for (let goalId of event.goalsAdded) {
        await repository(sqlLibrary.draft, 'addGoalToDraft', { draftId: body.draftId, goalId });
      }

      for (let goalId of event.goalsRemoved) {
        await repository(sqlLibrary.draft, 'removeGoalFromDraft', { draftId: body.draftId, goalId });
      }

      ctx.status = 200;
      ctx.body = {
        status: ctx.status,
        success: true
      };
      return ctx;
    },

    async getDraftsByActivityId(ctx) {
      let drafts = await repository(sqlLibrary.draft, 'getDraftsByActivityId', {activityId: ctx.params.activityId});
      let draftGoal = await repository(sqlLibrary.draft, 'getDraftCriteria', {});

      const draftsWithGoals = drafts.map(x => {
        x.goals = draftGoal.filter(y=>y.draftId === x.id).map(z => z.criteriaId);
        return x;
      });
      ctx.status = 200;
      ctx.body = {
        status: ctx.status,
        success: true,
        payload: draftsWithGoals
      };
      return ctx;
    }
  };
};
