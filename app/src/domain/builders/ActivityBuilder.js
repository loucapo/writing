module.exports = function(repository, sqlLibrary, domain, entityBuilders) {
  return {
    async getActivityARById(activityId) {
      const keys = { activityId };
      let props = await repository(sqlLibrary.activity, 'getActivityById', keys);
      //check for activity
      let activity = props ? props[0] : undefined;
      if (!activity) {
        throw new Error(`No activity found with id: ${activityId}`);
      }
      activity.drafts = await entityBuilders.DraftBuilder.getDraftsByActivityId(activityId);

      return new domain.Activity(activity);
    }
  };
};
