
module.exports = function(AggregateRootBase, invariant, uuid) {
  return class Course extends AggregateRootBase {
    constructor() {
      super();
      this.type = 'Course';
    }

    static aggregateName() {
      return 'Course';
    }

    createCourseFromLTILaunch(cmd) {
      this.setIsNew();
      const data = {};
      data.id = this._id = uuid.v4();
      data.title = this._title = cmd.title;
      data.abbreviation = this._abbreviation = cmd.abbreviation;
      data.courseId = this._courseId = cmd.courseId;
      data.instructorId = this._instructorId = cmd.instructorId;
      this.raiseEvent({
        eventName: 'courseCreatedFromLTILLaunch',
        data
      });
    }
  }
};
