module.exports = function(EntityBase, StudentReflectionAnswer, StudentRubricScore, Feedback, ReviewStatus, uuid) {
  return class StudentDraft extends EntityBase {
    constructor(studentDraft) {
      super();
      this.type = 'StudentDraft';
      this.studentReflectionAnswers = [];
      this.rubricScores = [];
      this.feedback = [];
      if (studentDraft) {
        this.mapper(studentDraft);
      }
    }

    updateDraftPaper(cmd) {
      this.paper = cmd.paper;
      this.status = 'active';
    }

    updateFeedbackPaper(cmd) {
      this.feedbackPaper = cmd.feedbackPaper;
    }

    setStudentReflectionAnswers(cmd) {
      this.studentReflectionAnswers = cmd.studentReflectionAnswers.map(answer => {
        answer.studentReflectionAnswerId = answer.studentReflectionAnswerId || uuid.v4();
        return new StudentReflectionAnswer(answer);
      });
    }

    isActive() {
      return this.status === 'active';
    }

    studentReflectionQuestionsAnswered() {
      return this.studentReflectionAnswers.length > 0;
    }

    submit(cmd) {
      this.status = 'submitted';
      this.reviewStatus = ReviewStatus.notStarted;
      this.submittedDate = cmd.submittedDate;
    }

    updateReviewStatus(cmd) {
      this.reviewStatus = cmd.reviewStatus;
      this.reviewedDate = cmd.reviewedDate;
    }

    submitEndComment(cmd) {
      this.endComment = cmd.endComment;
    }

    submitFinalGrade(cmd) {
      this.finalGrade = cmd.finalGrade;
    }

    updateRubricScore(cmd) {
      this.rubricScores = cmd.rubricScores.map(score => {
        score.studentRubricScoreId = score.studentRubricScoreId || uuid.v4();
        return new StudentRubricScore(score);
      });
    }

    createFeedback(feedback) {
      feedback.feedbackId = feedback.feedbackId || uuid.v4();
      new Feedback(feedback);
      this.feedback = feedback;
    }
  };
};
