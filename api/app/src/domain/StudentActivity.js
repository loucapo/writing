module.exports = function(AggregateRootBase, invariant, uuid) {
  return class StudentActivity extends AggregateRootBase {
    constructor(studentActivity) {
      super();
      this.type = 'StudentActivity';
      this.studentDrafts = [];
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
      this.raiseEvent({
        eventName: 'studentActivityCreated',
        event
      });
      return event;
    }

    createNewStudentDraft(cmd) {
      const event = this.mapper(cmd);
      invariant(!this.studentDrafts.find(x => x.active),
        `You may not start a new Draft while you still have an other active Draft`);

      event.studentDraftId = uuid.v4();
      event.draftId = cmd.draftId;
      event.studentActivityId = cmd.studentActivityId;
      this.raiseEvent({
        eventName: 'studentDraftCreated',
        event
      });

      return event;
    }

    updateDraftPaper(cmd) {
      const event = this.mapper(cmd);
      let studentDraft = this.studentDrafts.find(x => x.studentDraftId === cmd.studentDraftId);
      studentDraft.updateDraftPaper(cmd);
      event.status = studentDraft.status;
      this.raiseEvent({
        eventName: 'studentDraftPaperUpdated',
        event
      });

      return event;
    }

    setStudentReflectionAnswers(cmd) {
      const event = this.mapper(cmd);
      let studentDraft = this.studentDrafts.find(x => x.studentDraftId === cmd.studentDraftId);

      studentDraft.setStudentReflectionAnswers(cmd);

      this.raiseEvent({
        eventName: 'studentDraftReflectionAnswersUpdated',
        event
      });

      return event;
    }

    getStudentReflectionAnswersByStudentDraftId(cmd) {
      return this.studentDrafts.find(x => x.studentDraftId === cmd.studentDraftId).studentReflectionAnswers
        .map(x => ({
          studentDraftId: cmd.studentDraftId,
          studentReflectionQuestionId: x.studentReflectionQuestionId,
          studentReflectionAnswerId: x.studentReflectionAnswerId,
          studentReflectionAnswer: x.studentReflectionAnswer })
        );
    }

    submitDraft(cmd) {
      const event = this.mapper(cmd);
      let studentDraft = this.studentDrafts.find(x => x.studentDraftId === cmd.studentDraftId);
      invariant(studentDraft.isActive(),
        `Student Draft, Id: ${cmd.studentDraftId}, must be active before it can be submitted`);
      invariant(studentDraft.studentReflectionQuestionsAnswered(),
        `Student Draft, Id: ${cmd.studentDraftId}, must have Reflection Questions answered before it can be submitted`);
      studentDraft.submit(cmd);
      event.status = studentDraft.status;

      this.raiseEvent({
        eventName: 'studentDraftSubmitted',
        event
      });

      return event;
    }
  };
};
