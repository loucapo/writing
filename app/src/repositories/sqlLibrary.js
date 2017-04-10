module.exports = function(path) {
  return function() {
    let activity = path.join(__dirname, `./sql/activity.sql`);
    let draft = path.join(__dirname, `./sql/draft.sql`);

    return {
      activity,
      draft
    };
  }();
};
