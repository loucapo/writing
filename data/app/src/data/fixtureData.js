/* eslint-disable camelcase*/
module.exports = function(faker) {
  return function() {
    let simpleActivity = function() {
      return {
        activity_id: faker.random.uuid(),
        course_id: 123456,
        title: faker.fake(`Assignment {{random.words}}`),
        created_by: faker.random.uuid(),
        prompt: null,
        modified_by: null,
        modified_at: null
      };
    };

    // Individual fixtures by name in the below map.  Each fixture should be its own set of tables.
    return {
      threeActivity: {
        activity: [
          simpleActivity(),
          simpleActivity(),
          simpleActivity()
        ]
      }
    };
  };
};
