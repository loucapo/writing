module.exports = function(path) {
  return function() {
    let activity = path.join(__dirname, `./sql/activity.sql`);
    let studentActivity = path.join(__dirname, `./sql/studentActivity.sql`);
    let studentDraft = path.join(__dirname, `./sql/studentDraft.sql`);
    let rubric = path.join(__dirname, `./sql/rubric.sql`);
    let criterion = path.join(__dirname, `./sql/criterion.sql`);
    let goal = path.join(__dirname, `./sql/goal.sql`);
    let draft = path.join(__dirname, `./sql/draft.sql`);
    let studentReflectionQuestions = path.join(__dirname, `./sql/studentReflectionQuestions.sql`);
    let submissionStatus = path.join(__dirname, `./sql/submissionStatus.sql`);
    let studentRubricScore = path.join(__dirname, `./sql/studentRubricScore.sql`);
    let feedback = path.join(__dirname, `./sql/feedback.sql`);
    let editingMark = path.join(__dirname, `./sql/editingMark.sql`);

    return {
      activity,
      criterion,
      goal,
      rubric,
      draft,
      studentActivity,
      studentDraft,
      studentReflectionQuestions,
      submissionStatus,
      studentRubricScore,
      feedback,
      editingMark
    };
  }();
};
