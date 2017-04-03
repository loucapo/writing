module.exports = function(repository, path, logger, uuid) {
  return {
    // get all draft descriptions for an activity
    async getDescriptions(ctx) {
      logger.info('Selecting draft descriptions for activity ' + ctx.params.activityId + ' from repository');
      let draftDescriptionSql = path.join(__dirname, `./../repositories/sql/draft_description.sql`);
      let descriptions = await repository(draftDescriptionSql, 'get_draft_descriptions_by_activity_id', ctx.params);

      ctx.status = 200;
      ctx.body = descriptions;

      return ctx;
    },

    // create new draft description;
    async createDescription(ctx) {
      const body = ctx.request.body;
      body.id = uuid.v4();
      let draftDescriptionSql = path.join(__dirname, `./../repositories/sql/draft_description.sql`);
      logger.info(`Creating Description from payload: ${JSON.stringify(body)}`);
      await repository(draftDescriptionSql, 'create_new_draft_description', body);
      logger.debug(`Call to createDescription successful with following payload: ${JSON.stringify(body)}`);

      ctx.status = 200;
      ctx.body = {
        id: body.id
      };
      return ctx;
    },

    // delete draft description;
    async deleteDescription(ctx) {
      logger.info('Deleting draft description ' + ctx.params.id + ' from repository');
      let draftDescriptionSql = path.join(__dirname, `./../repositories/sql/draft_description.sql`);
      await repository(draftDescriptionSql, 'delete_draft_description', ctx.params);

      // This should be a 204 response with and empty body, but I can't figure out
      // how to get swagger to allow it. For now 200 with this body is close enough.
      ctx.status = 200;
      ctx.body = {
        id: ctx.params.id
      };

      console.log(ctx.response);
      return ctx;
    },

    // update a draft description;
    async updateDescription(ctx) {
      const body = ctx.request.body;
      let updateValues =
        {
          id: ctx.params.id,
          instructions: body.instructions,
          listPosition: body.listPosition
        };
      let draftDescriptionSql = path.join(__dirname, `./../repositories/sql/draft_description.sql`);
      logger.info(`Updating Description from payload: ${JSON.stringify(body)}`);
      await repository(draftDescriptionSql, 'update_draft_description', updateValues);
      logger.debug(`Call to updateDescription successful with following payload: ${JSON.stringify(body)}`);

      ctx.status = 200;
      ctx.body = body;
      return ctx;
    }
  };
};
