module.exports = function(AggregateRootBase, invariant, uuid) {
  return class StudentActivity extends AggregateRootBase {
    constructor(studentActivity) {
      super();
      this.type = 'StudentActivity';
      this.studentDrafts = [];
      this.studentId = undefined;
      if (studentActivity) {
        this.mapper(studentActivity);
      }
    }

    static aggregateName() {
      return 'StudentActivity';
    }

    createNewStudentActivity(cmd) {
      const event = this.mapper(cmd);
      event.activityId = cmd.activityId || uuid.v4();
      event.studentActivityId = this.studentActivityId = cmd.studentActivityId || uuid.v4();
      event.studentId = this.studentId = cmd.studentId;
      this.raiseEvent({
        eventName: 'studentActivityCreated',
        event
      });
      return event;
    }

    createNewStudentDraft(cmd) {
      const event = this.mapper(cmd);
      invariant(!this.studentDrafts.find(studentDraft => studentDraft.active),
        `You may not start a new Draft while you still have another active Draft`);

      if (this.studentDrafts.length > 1) {
        event.paper = this.studentDrafts[this.studentDrafts.length - 1].paper;
      } else {
        event.paper = null;
      }

      event.studentDraftId = uuid.v4();
      event.draftId = cmd.draftId;
      event.studentActivityId = cmd.studentActivityId;
      event.studentId = this.studentId;
      this.raiseEvent({
        eventName: 'studentDraftCreated',
        event
      });

      return event;
    }

    updateDraftPaper(cmd) {
      const event = this.mapper(cmd);
      let studentDraft = this.studentDrafts.find(sDraft => sDraft.studentDraftId === cmd.studentDraftId);
      studentDraft.updateDraftPaper(cmd);
      event.status = studentDraft.status;
      this.raiseEvent({
        eventName: 'studentDraftPaperUpdated',
        event
      });

      return event;
    }

    updateFeedbackPaper(cmd) {
      const event = this.mapper(cmd);
      let studentDraft = this.studentDrafts.find(sDraft => sDraft.studentDraftId === cmd.studentDraftId);
      studentDraft.updateFeedbackPaper(cmd);
      this.raiseEvent({
        eventName: 'feedbackPaperUpdated',
        event
      });

      return event;
    }

    setStudentReflectionAnswers(cmd) {
      const event = this.mapper(cmd);
      let studentDraft = this.studentDrafts.find(sDraft => sDraft.studentDraftId === cmd.studentDraftId);

      studentDraft.setStudentReflectionAnswers(cmd);

      this.raiseEvent({
        eventName: 'studentDraftReflectionAnswersUpdated',
        event
      });

      return event;
    }

    getStudentReflectionAnswersByStudentDraftId(cmd) {
      return this.studentDrafts.find(sDraft => sDraft.studentDraftId === cmd.studentDraftId).studentReflectionAnswers
        .map(answer => ({
          studentDraftId: cmd.studentDraftId,
          studentReflectionQuestionId: answer.studentReflectionQuestionId,
          studentReflectionAnswerId: answer.studentReflectionAnswerId,
          studentReflectionAnswer: answer.studentReflectionAnswer })
        );
    }

    submitDraft(cmd) {
      const event = this.mapper(cmd);
      let studentDraft = this.studentDrafts.find(sDraft => sDraft.studentDraftId === cmd.studentDraftId);
      invariant(studentDraft.isActive(),
        `Student Draft, Id: ${cmd.studentDraftId}, must be active before it can be submitted`);
      invariant(studentDraft.studentReflectionQuestionsAnswered(),
        `Student Draft, Id: ${cmd.studentDraftId}, must have Reflection Questions answered before it can be submitted`);
      studentDraft.submit(cmd);
      event.status = studentDraft.status;
      event.reviewStatus = studentDraft.reviewStatus.key;

      this.raiseEvent({
        eventName: 'studentDraftSubmitted',
        event
      });

      return event;
    }
    updateReviewStatus(cmd) {
      const event = this.mapper(cmd);
      let studentDraft = this.studentDrafts.find(sDraft => sDraft.studentDraftId === cmd.studentDraftId);
      studentDraft.updateReviewStatus(cmd);
      this.raiseEvent({
        eventName: 'studentDraftReviewStatusUpdated',
        event
      });

      return event;
    }

    submitEndComment(cmd) {
      const event = this.mapper(cmd);
      let studentDraft = this.studentDrafts.find(sDraft => sDraft.studentDraftId === cmd.studentDraftId);
      studentDraft.submitEndComment(cmd);
      this.raiseEvent({
        eventName: 'studentDraftEndCommentSubmitted',
        event
      });

      return event;
    }

    submitFinalGrade(cmd) {
      const event = this.mapper(cmd);
      let studentDraft = this.studentDrafts.find(sDraft => sDraft.studentDraftId === cmd.studentDraftId);
      studentDraft.submitFinalGrade(cmd);
      this.raiseEvent({
        eventName: 'studentDraftFinalGradeSubmitted',
        event
      });

      return event;
    }

    updateRubricScore(cmd) {
      const event = this.mapper(cmd);
      let studentDraft = this.studentDrafts.find(sDraft => sDraft.studentDraftId === cmd.studentDraftId);

      studentDraft.updateRubricScore(cmd);

      this.raiseEvent({
        eventName: 'studentRubricScoreUpdated',
        event
      });

      return event;
    }

    getRubricScores(cmd) {
      let studentDraft = this.studentDrafts.find(sDraft => sDraft.studentDraftId === cmd.studentDraftId);
      return studentDraft.rubricScores;
    }

    createFeedback(cmd) {
      const event = this.mapper(cmd);
      let studentDraft = this.studentDrafts.find(sDraft => sDraft.studentDraftId === cmd.studentDraftId);

      studentDraft.createFeedback(cmd);

      this.raiseEvent({
        eventName: 'feedbackCreated',
        event
      });

      return event;
    }

    getFeedback(cmd) {
      let studentDraft = this.studentDrafts.find(sDraft => sDraft.studentDraftId === cmd.studentDraftId);
      return studentDraft.feedback;
    }

    removeFeedbackFromStudentDraft(cmd) {
      const event = this.mapper(cmd);
      const studentDraft = this.studentDrafts.find(sDraft => sDraft.studentDraftId === cmd.studentDraftId);

      // check business rules here
      studentDraft.feedback = studentDraft.feedback.reduce((acc, f) => {
        if (f.feedbackId !== cmd.feedbackId) {
          acc.push(f);
        }
        return acc;
      }, []);

      this.raiseEvent({
        eventName: 'feedbackRemovedFromStudentDraft',
        event
      });

      return event;
    }
  };
};
