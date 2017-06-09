module.exports = function(EntityBase) {
  return class StudentReflectionAnswer extends EntityBase {
    constructor(studentReflectionAnswer) {
      super();
      this.type = 'StudentReflectionAnswer';
      if (studentReflectionAnswer) {
        this.mapper(studentReflectionAnswer);
      }
    }
  };
};
