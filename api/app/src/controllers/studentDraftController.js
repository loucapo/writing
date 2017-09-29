module.exports = function(
  StudentActivity,
  repository,
  sqlLibrary,
  moment,
  studentActivityBuilder,
  logger,
  ReviewStatus
) {
  return {
    // check if it exists, if not create it;
    async createStudentDraftIfNotThere(ctx) {
      let command = {
        studentActivityId: ctx.params.studentActivityId,
        draftId: ctx.params.draftId,
        createdById: ctx.state.user.id,
        createdDate: moment().toISOString()
      };
      let studentDraft = await repository.query(
        sqlLibrary.studentDraft,
        'getStudentDraftByStudentActivityIdAndDraftId',
        { studentActivityId: command.studentActivityId, draftId: command.draftId }
      );

      if (!studentDraft || !studentDraft[0]) {
        logger.info(`Creating studentDraft from payload: ${JSON.stringify(command)}`);
        const studentActivity = await studentActivityBuilder.getStudentActivityARById(command.studentActivityId);
        let event = studentActivity.createNewStudentDraft(command);
        await repository.query(sqlLibrary.studentDraft, 'createStudentDraft', event);
        studentDraft = await repository.query(sqlLibrary.studentDraft,
          'getStudentDraftByStudentActivityIdAndDraftId',
          { studentActivityId: command.studentActivityId, draftId: command.draftId }
        );
      }
      logger.debug(`Call to createStudentDraft successful with following payload: ${JSON.stringify(command)}`);

      ctx.status = 200;
      ctx.body = studentDraft;
      return ctx;
    },

    async getStudentDraftByStudentActivityId(ctx) {
      const studentDraft = await repository.query(
        sqlLibrary.studentDraft,
        'getStudentDraftByStudentActivityIdAndDraftId',
        { studentActivityId: ctx.params.studentActivityId, draftId: ctx.params.draftId }
      );
      ctx.status = 200;
      ctx.body = studentDraft;
      return ctx;
    },

    async getStudentDraftByStudentDraftId(ctx) {
      const studentDraft = await repository.query(sqlLibrary.studentDraft, 'getStudentDraftByStudentDraftId', {
        studentDraftId: ctx.params.studentDraftId
      });
      ctx.status = 200;
      ctx.body = studentDraft;
      return ctx;
    },

    async getAllStudentDraftsByStudentActivityId(ctx) {
      const studentDrafts = await repository.query(sqlLibrary.studentDraft, 'getStudentDraftsByStudentActivityId', {
        studentActivityId: ctx.params.studentActivityId
      });
      ctx.status = 200;
      ctx.body = studentDrafts;
      return ctx;
    },

    async updateStudentDraftPaper(ctx) {
      let command = ctx.request.body;
      const studentActivityId = ctx.params.studentActivityId;
      command.studentDraftId = ctx.params.studentDraftId;
      command.modifiedById = ctx.state.user.id;
      command.modifiedDate = moment().toISOString();
      let studentActivity = await studentActivityBuilder.getStudentActivityARById(studentActivityId);
      let event = studentActivity.updateDraftPaper(command);

      await repository.query(sqlLibrary.studentDraft, 'updateStudentDraftPaper', event);

      ctx.status = 200;
      return ctx;
    },

    async updateFeedbackPaper(ctx) {
      let command = ctx.request.body;
      const studentActivityId = ctx.params.studentActivityId;
      command.studentDraftId = ctx.params.studentDraftId;
      let studentActivity = await studentActivityBuilder.getStudentActivityARById(studentActivityId);
      let event = studentActivity.updateFeedbackPaper(command);

      await repository.query(sqlLibrary.studentDraft, 'updateFeedbackPaper', event);

      ctx.status = 200;
      return ctx;
    },

    async getStudentReflectionAnswers(ctx) {
      const studentReflections = await repository.query(sqlLibrary.studentDraft, 'getStudentReflectionAnswers', {
        studentDraftId: ctx.params.studentDraftId
      });
      ctx.status = 200;
      ctx.body = studentReflections;
      return ctx;
    },

    async setStudentReflectionAnswers(ctx) {
      const command = ctx.request.body;
      command.studentActivityId = ctx.params.studentActivityId;
      command.studentDraftId = ctx.params.studentDraftId;
      let studentActivity = await studentActivityBuilder.getStudentActivityARById(command.studentActivityId);
      studentActivity.setStudentReflectionAnswers(command);
      const answers = studentActivity.getStudentReflectionAnswersByStudentDraftId({
        studentDraftId: command.studentDraftId
      });
      repository.transaction(async repo => {
        await repo.query(sqlLibrary.studentDraft, 'removeAllStudentReflectionAnswers', {
          studentDraftId: command.studentDraftId
        });

        for (let answer of answers) {
          let data = {
            createdById: ctx.state.user.id,
            studentDraftId: command.studentDraftId,
            studentReflectionAnswerId: answer.studentReflectionAnswerId,
            studentReflectionQuestionId: answer.studentReflectionQuestionId,
            studentReflectionAnswer: answer.studentReflectionAnswer
          };
          await repo.query(sqlLibrary.studentDraft, 'addStudentReflectionAnswerToStudentDraft', data);
        }
      });

      ctx.status = 200;
      return ctx;
    },

    async submitStudentDraft(ctx) {
      const studentActivityId = ctx.params.studentActivityId;
      let command = {
        studentDraftId: ctx.params.studentDraftId,
        modifiedById: ctx.state.user.id,
        submittedDate: moment().format('YYYY-MM-DD')
      };

      let studentActivity = await studentActivityBuilder.getStudentActivityARById(studentActivityId);
      let event = studentActivity.submitDraft(command);

      await repository.query(sqlLibrary.studentDraft, 'submitStudentDraft', event);

      ctx.status = 200;
      return ctx;
    },

    async updateReviewStatus(ctx) {
      const command = ctx.request.body;

      const reviewStatus = ReviewStatus[command.reviewStatus];
      if (!reviewStatus) {
        ctx.status = 422;
        ctx.body = { error: `reviewStatus ${command.reviewStatus} is not a valid reviewStatus` };
        return ctx;
      }
      const studentActivityId = ctx.params.studentActivityId;
      command.studentDraftId = ctx.params.studentDraftId;
      command.modifiedById = ctx.state.user.id;
      command.reviewedDate = reviewStatus === 'submitted' ? moment().format('YYYY-MM-DD') : null;
      let studentActivity = await studentActivityBuilder.getStudentActivityARById(studentActivityId);
      let event = studentActivity.updateReviewStatus(command);

      await repository.query(sqlLibrary.studentDraft, 'updateReviewStatus', event);

      ctx.body = reviewStatus;
      ctx.status = 200;
      return ctx;
    },

    async submitEndComment(ctx) {
      const command = ctx.request.body;
      const studentActivityId = ctx.params.studentActivityId;
      command.studentDraftId = ctx.params.studentDraftId;
      command.modifiedById = ctx.state.user.id;
      command.modifiedDate = moment().toISOString();
      let studentActivity = await studentActivityBuilder.getStudentActivityARById(studentActivityId);
      let event = studentActivity.submitEndComment(command);

      await repository.query(sqlLibrary.studentDraft, 'submitStudentDraftEndComment', event);

      ctx.status = 200;
      return ctx;
    },

    async submitFinalGrade(ctx) {
      const command = ctx.request.body;
      const studentActivityId = ctx.params.studentActivityId;
      command.studentDraftId = ctx.params.studentDraftId;
      command.modifiedById = ctx.state.user.id;
      command.modifiedDate = moment().toISOString();
      let studentActivity = await studentActivityBuilder.getStudentActivityARById(studentActivityId);
      let event = studentActivity.submitFinalGrade(command);

      await repository.query(sqlLibrary.studentDraft, 'submitStudentDraftFinalGrade', event);

      ctx.status = 200;
      return ctx;
    },

    async updateRubricScore(ctx) {
      const command = ctx.request.body;
      command.studentActivityId = ctx.params.studentActivityId;
      command.studentDraftId = ctx.params.studentDraftId;
      command.rubricId = ctx.params.rubricId;
      let studentActivity = await studentActivityBuilder.getStudentActivityARById(command.studentActivityId);
      studentActivity.updateRubricScore(command);
      const scores = studentActivity.getRubricScores({
        studentDraftId: command.studentDraftId
      });

      repository.transaction(async repo => {
        await repo.query(sqlLibrary.studentRubricScore, 'removeAllStudentRubricScores', {
          studentDraftId: command.studentDraftId
        });

        for (let score of scores) {
          let data = {
            modifiedById: ctx.state.user.id,
            modifiedDate: moment().toISOString(),
            studentRubricScoreId: score.studentRubricScoreId,
            studentDraftId: command.studentDraftId,
            rubricId: command.rubricId,
            criteriaId: score.criteriaId,
            score: score.score
          };
          await repo.query(sqlLibrary.studentRubricScore, 'updateStudentRubricScore', data);
        }
      });

      ctx.status = 200;
      ctx.body = scores;
      return ctx;
    },

    async getRubricScores(ctx) {
      const rubricScores = await repository.query(sqlLibrary.studentRubricScore, 'getStudentRubricScores', {
        studentDraftId: ctx.params.studentDraftId
      });
      ctx.status = 200;
      ctx.body = rubricScores;
      return ctx;
    },

    async createFeedback(ctx) {
      let command = ctx.request.body;
      command.studentActivityId = ctx.params.studentActivityId;
      command.studentDraftId = ctx.params.studentDraftId;
      let studentActivity = await studentActivityBuilder.getStudentActivityARById(command.studentActivityId);
      studentActivity.createFeedback(command);
      const feedback = studentActivity.getFeedback({
        studentDraftId: command.studentDraftId
      });

      repository.transaction(async repo => {
        let data = {
          createdById: ctx.state.user.id,
          createdDate: moment().toISOString(),
          studentDraftId: command.studentDraftId,
          content: feedback.content,
          level: feedback.level || null,
          showHeader: !!feedback.showHeader,
          goalId: feedback.goalId || null,
          editingMarkId: feedback.editingMarkId || null,
          feedbackId: feedback.feedbackId
        };
        await repo.query(sqlLibrary.feedback, 'createFeedback', data);
      });

      ctx.status = 200;
      ctx.body = feedback;
      return ctx;
    },

    async getFeedback(ctx) {
      const feedback = await repository.query(sqlLibrary.feedback, 'getFeedback', {
        studentDraftId: ctx.params.studentDraftId
      });
      ctx.status = 200;
      ctx.body = feedback;
      return ctx;
    },

    async deleteFeedback(ctx) {
      const command = ctx.request.body;
      command.studentActivityId = ctx.params.studentActivityId;
      command.studentDraftId = ctx.params.studentDraftId;
      command.feedbackId = ctx.params.feedbackId;
      command.deletedById = ctx.state.user.id;
      command.deletedDate = moment().toISOString();
      const studentActivity = await studentActivityBuilder.getStudentActivityARById(command.studentActivityId);
      const event = studentActivity.removeFeedbackFromStudentDraft(command);

      const queryParams = {
        feedbackId: event.feedbackId,
        deletedById: ctx.state.user.id,
        deletedDate: moment().toISOString()
      };

      repository.transaction(async repo => {
        await repo.query(sqlLibrary.feedback, 'deleteFeedback', queryParams);
      });

      ctx.status = 200;
      ctx.body = {feedbackId: event.feedbackId};
      return ctx;
    }
  };
};
