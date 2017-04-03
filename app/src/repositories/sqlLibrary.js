module.exports = function(path) {
  return function() {
    let activity = path.join(__dirname, `./sql/activity.sql`);
    let draftDescription = path.join(__dirname, `./sql/draft_descriptions.sql`);

    return {
      activity,
      draftDescription
    };
  }();
};
