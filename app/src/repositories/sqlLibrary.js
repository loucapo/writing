module.exports = function(path) {
  return function() {
    let activity = path.join(__dirname, `./sql/activity.sql`);
    let studentActivity = path.join(__dirname, `./sql/studentActivity.sql`);
    let rubric = path.join(__dirname, `./sql/rubric.sql`);
    let criteria = path.join(__dirname, `./sql/criteria.sql`);
    let draft = path.join(__dirname, `./sql/draft.sql`);
    let studentReflectionQuestions = path.join(__dirname, `./sql/studentReflectionQuestions.sql`);

    return {
      activity,
      criteria,
      rubric,
      draft,
      studentReflectionQuestions,
      studentActivity
    };
  }();
};
