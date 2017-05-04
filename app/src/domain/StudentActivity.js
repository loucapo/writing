
module.exports = function(AggregateRootBase, entities, invariant, uuid) {
  return class StudentActivity extends AggregateRootBase {
    constructor(studentActivity) {
      super();
      this.type = 'StudentActivity';
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
      event.studentDraftId = uuid.v4();
      event.draftId = cmd.draftId;
      event.studentActivityId = cmd.studentActivityId;
      this.raiseEvent({
        eventName: 'studentDraftCreated',
        event
      });
      return event;
    }
  };
};

