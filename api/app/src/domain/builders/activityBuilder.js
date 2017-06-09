module.exports = function(repository, Activity, sqlLibrary, draftBuilder) {
  return {
    async getActivityARById(activityId) {
      const keys = { activityId };
      let props = await repository.query(sqlLibrary.activity, 'getActivityById', keys);
      //check for activity
      let activity = props ? props[0] : undefined;
      if (!activity) {
        throw new Error(`No activity found with id: ${activityId}`);
      }
      activity.drafts = await draftBuilder.getDraftsByActivityId(activityId);

      return new Activity(activity);
    }
  };
};
