module.exports = function(repository, sqlLibrary, domain, entityBuilders) {
  return {
    async getActivityARById(activityId) {
      const keys = { id: activityId };
      let props = await repository(sqlLibrary.activity, 'getActivityById', keys);
      //check for activity
      if (!props) {
        throw new Error(`No activity found with id: ${activityId}`);
      }
      props.drafts = await entityBuilders.DraftBuilder.getDraftsByActivityId(activityId);
      return new domain.Activity(props);
    }
  };
};
