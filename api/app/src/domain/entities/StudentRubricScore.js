module.exports = function(EntityBase) {
  return class StudentRubricScore extends EntityBase {
    constructor(studentRubricScore) {
      super();
      this.type = 'StudentRubricScore';
      if (studentRubricScore) {
        this.mapper(studentRubricScore);
      }
    }
  };
};
