module.exports = function(repository, activityBuilder, sqlLibrary) {
  return {
    async addDraftToActivity(ctx) {
      const command = ctx.request.body;
      command.activityId = ctx.params.activityId;
      command.createdBy = ctx.state.user.id;
      let activity = await activityBuilder.getActivityARById(command.activityId);
      let event = activity.addDraftToActivity(command);
      let draftIndexes = activity.getDraftIndexes();
      repository.transaction(async repo => {
        await repo.query(sqlLibrary.draft, 'addDraftToActivity', event);
        for (let draft of draftIndexes) {
          draft.modifiedBy = ctx.state.user.id;
          await repo.query(sqlLibrary.draft, 'updateDraftIndex', draft);
        }
      });

      ctx.status = 200;
      ctx.body = { draftId: event.draftId };
      return ctx;
    },

    async removeDraftFromActivity(ctx) {
      let activity = await activityBuilder.getActivityARById(ctx.params.activityId);
      let event = activity.removeDraftFromActivity({draftId: ctx.params.draftId});
      let draftIndexes = activity.getDraftIndexes();

      const queryParams = {
        draftId: event.draftId,
        deletedBy: ctx.state.user.id
      };

      repository.transaction(async repo => {
        await repo.query(sqlLibrary.draft, 'deleteDraft', queryParams);

        for (let draft of draftIndexes) {
          draft.modifiedBy = ctx.state.user.id;
          await repo.query(sqlLibrary.draft, 'updateDraftIndex', draft);
        }
      });

      ctx.status = 200;
      return ctx;
    },

    async updateDraftInstructions(ctx) {
      const command = ctx.request.body;
      command.draftId = ctx.params.draftId;
      command.modifiedBy = ctx.state.user.id;
      let activity = await activityBuilder.getActivityARById(ctx.params.activityId);
      let event = activity.updateDraftInstructions(command);

      await repository.query(sqlLibrary.draft, 'updateDraftInstructions', event);

      ctx.status = 200;
      return ctx;
    },

    async setDraftGoals(ctx) {
      const command = ctx.request.body;
      command.activityId = ctx.params.activityId;
      command.draftId = ctx.params.draftId;
      let activity = await activityBuilder.getActivityARById(command.activityId);
      activity.setDraftGoals(command);
      const goals = activity.getDraftGoalsByDraftId({draftId: command.draftId});
      repository.transaction(async repo => {
        await repo.query(sqlLibrary.draft, 'removeAllGoals', { draftId: command.draftId });

        let i = 0;
        for (let goal of goals) {
          i++;
          await repo.query(sqlLibrary.draft, 'addGoalToDraft', {draftId: goal.draftId, goalId: goal.goalId, index: i});
        }
      });

      ctx.status = 200;
      return ctx;
    },

    async setStudentReflectionQuestions(ctx) {
      const command = ctx.request.body;
      command.activityId = ctx.params.activityId;
      command.draftId = ctx.params.draftId;
      command.modifiedBy = ctx.state.user.id;
      let activity = await activityBuilder.getActivityARById(command.activityId);
      let event = activity.setStudentReflectionQuestions(command);
      repository.transaction(async repo => {
        await repo.query(sqlLibrary.draft, 'removeAllStudentReflectionQuestions', {draftId: command.draftId});

        let i = 0;
        for (let srq of event.studentReflectionQuestions) {
          i++;
          await repo.query(
            sqlLibrary.draft,
            'addStudentReflectionQuestionsToDraft',
            {draftId: command.draftId, studentReflectionQuestionId: srq, index: i});
        }
      });
      ctx.status = 200;
      return ctx;
    },

    async getDraftsByActivityId(ctx) {
      let drafts = await repository.query(sqlLibrary.draft,
        'getDraftsByActivityId',
        {activityId: ctx.params.activityId});
      let draftGoal = await repository.query(sqlLibrary.draft, 'getDraftGoals', {});
      let draftStudentReflectionQuestions = await repository.query(
        sqlLibrary.draft,
        'getDraftStudentReflectionQuestions',
        {});

      const denormalizedDraft = drafts.map(x => {
        x.goals = draftGoal.filter(y=>y.draftId === x.draftId).map(z => z.goalId);
        x.studentReflectionQuestions = draftStudentReflectionQuestions
          .filter(y=>y.draftId === x.draftId).map(z => {
            return z.studentReflectionQuestionId;
          });
        return x;
      });

      ctx.status = 200;
      ctx.body = denormalizedDraft;
      return ctx;
    },

    async getEditingMarks(ctx) {
      // TODO: Should eventually only get editingMarks associated with draft
      const editingMarks = await repository.query(sqlLibrary.editingMark, 'getEditingMarks', {});
      ctx.status = 200;
      ctx.body = editingMarks;
      return ctx;
    }
  };
};
