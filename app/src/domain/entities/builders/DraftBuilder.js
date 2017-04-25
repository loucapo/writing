module.exports = function(repository, sqlLibrary, entities) {
  return {
    async getDraftsByActivityId(activityId) {
      const keys = { activityId };
      let props = await repository.query(sqlLibrary.draft, 'getDraftsByActivityId', keys);
      return props ? props.map(x => new entities.Draft(x)) : [];
    }
  };
};
