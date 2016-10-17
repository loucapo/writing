
module.exports = function(AggregateRootBase, invariant, uuid) {
  return class Trainer extends AggregateRootBase {
    constructor() {
      super();
      var _firstName;
      var _lastName;
      var _email;
      var _IAM;
      this.type = 'User';
    }

    static aggregateName() {
      return 'User';
    }

    commandHandlers() {
      return {
        'createInstructorFromLTILaunch': function (cmd) {
          this.raiseEvent({
            eventName: 'instructorCreatedFromLTILLaunch',
            data: {
              id: uuid.v4(),
              firstName: cmd.firstName,
              lastName: cmd.lastName,
              email: cmd.email,
              IAM: cmd.IAM
            }
          });
        }
      };
    }

    expectCorrectPassword(password) {
      invariant(password != this._password,
        new Error('Incorrect credentials'));
    }
  }
};
