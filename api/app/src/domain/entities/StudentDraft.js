module.exports = function(EntityBase, StudentReflectionAnswer, uuid) {
  return class StudentDraft extends EntityBase {
    constructor(studentDraft) {
      super();
      this.type = 'StudentDraft';
      this.studentReflectionAnswers = [];
      if (studentDraft) {
        this.mapper(studentDraft);
      }
    }

    updateDraftPaper(cmd) {
      this.paper = cmd.paper;
      this.status = 'active';
    }

    setStudentReflectionAnswers(cmd) {
      this.studentReflectionAnswers = cmd.studentReflectionAnswers.map(x => {
        x.studentReflectionAnswerId = x.studentReflectionAnswerId || uuid.v4();
        return new StudentReflectionAnswer(x);
      });
    }

    isActive() {
      return this.status === 'active';
    }

    studentReflectionQuestionsAnswered() {
      return this.studentReflectionAnswers.length > 0;
    }

    submit() {
      this.status = 'submitted';
    }
  };
};
