module.exports = function(domain, repository, domainBuilders, sqlLibrary) {
  return {
    async addDraftToActivity(ctx) {
      const command = ctx.request.body;
      command.activityId = ctx.params.activityId;
      command.createdById = ctx.state.user.user_data.id;
      let activity = await domainBuilders.ActivityBuilder.getActivityARById(command.activityId);
      let event = activity.addDraftToActivity(command);
      await repository.query(sqlLibrary.draft, 'addDraftToActivity', event);

      ctx.status = 200;
      ctx.body = { id: event.draftId };
      return ctx;
    },

    async removeDraftFromActivity(ctx) {
      let activity = await domainBuilders.ActivityBuilder.getActivityARById(ctx.params.activityId);
      let event = activity.removeDraftFromActivity({draftId: ctx.params.draftId});

      // this is going to be dependant on how we persist
      await repository.query(sqlLibrary.draft, 'removeDraftFromActivity', event);

      ctx.status = 200;
      return ctx;
    },

    async updateDraftInstructions(ctx) {
      const command = ctx.request.body;
      command.activityId = ctx.params.activityId;
      command.draftId = ctx.params.draftId;
      command.modifiedById = ctx.state.user.user_data.id;
      let activity = await domainBuilders.ActivityBuilder.getActivityARById(command.activityId);
      let event = activity.updateDraftInstructions(command);

      await repository.query(sqlLibrary.draft, 'updateDraftInstructions', event);

      ctx.status = 200;
      return ctx;
    },

    async setDraftGoals(ctx) {
      const command = ctx.request.body;
      command.activityId = ctx.params.activityId;
      command.draftId = ctx.params.draftId;
      let activity = await domainBuilders.ActivityBuilder.getActivityARById(command.activityId);
      let event = activity.setDraftGoals(command);

      repository.transaction(async repo => {
        await repo.query(sqlLibrary.draft, 'removeAllGoals', { draftId: command.draftId });

        for (let goalId of event.goals) {
          await repo.query(sqlLibrary.draft, 'addGoalToDraft', { draftId: command.draftId, goalId });
        }
      });

      ctx.status = 200;
      return ctx;
    },

    async getDraftsByActivityId(ctx) {
      let drafts = await repository.query(
        sqlLibrary.draft,
        'getDraftsByActivityId',
        {activityId: ctx.params.activityId}
      );
      let draftGoal = await repository.query(sqlLibrary.draft, 'getDraftCriteria', {});

      const draftsWithGoals = drafts.map(x => {
        x.goals = draftGoal.filter(y=>y.draftId === x.id).map(z => z.criteriaId);
        return x;
      });
      ctx.status = 200;
      ctx.body = draftsWithGoals;
      return ctx;
    }
  };
};
