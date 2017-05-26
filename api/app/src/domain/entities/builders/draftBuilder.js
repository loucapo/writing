module.exports = function(repository, sqlLibrary, Draft) {
  return {
    async getDraftsByActivityId(activityId) {
      const keys = { activityId };
      let props = await repository.query(sqlLibrary.draft, 'getDraftsByActivityId', keys);
      return props ? props.map(x => new Draft(x)) : [];
    }
  };
};
