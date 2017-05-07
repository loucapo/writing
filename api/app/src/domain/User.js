module.exports = function(AggregateRootBase, invariant, uuid, UserType) {
  return class User extends AggregateRootBase {
    constructor() {
      super();
      this.type = 'User';
    }

    static aggregateName() {
      return 'User';
    }

    createInstructorFromLTILaunch(cmd) {
      this.setIsNew();
      const data = {};
      data.id = this._id = uuid.v4();
      data.firstName = this._firstName = cmd.firstName;
      data.lastName = this._lastName = cmd.lastName;
      data.email = this._email = cmd.email;
      data.IAM = this._IAM = cmd.IAM;
      data.userType = this._userType = UserType.INSTRUCTOR;
      this.raiseEvent({
        eventName: 'instructorCreatedFromLTILLaunch',
        data
      });
    }
  };
};
