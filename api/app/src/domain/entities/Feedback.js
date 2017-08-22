module.exports = function(EntityBase) {
  return class Feedback extends EntityBase {
    constructor(feedback) {
      super();
      this.type = 'Feedback';
      if (feedback) {
        this.mapper(feedback);
      }
    }
  };
};
