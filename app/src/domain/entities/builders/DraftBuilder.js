module.exports = function(repository, sqlLibrary, entities) {
  return {
    async getDraftsByActivityId(activityId) {
      const keys = { activityId };
      let props = await repository(sqlLibrary.draft, 'getDraftsByActivityId', keys);
      return props ? props.map(x => new entities.draft(x)) : [];
    }
  };
};
