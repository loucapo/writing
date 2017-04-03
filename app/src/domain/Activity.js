
module.exports = function(AggregateRootBase, invariant, uuid) {
  return class Activity extends AggregateRootBase {
    constructor(activity) {
      super();
      this.type = 'Activity';
      if (activity) {
        this.mapper(activity);
      }
    }

    static aggregateName() {
      return 'Activity';
    }

    createNewActivity(cmd) {
      this.setIsNew();
      const event = this.mapper(cmd);
      event.id = this.id = cmd.id || uuid.v4();
      this.raiseEvent({
        eventName: 'activityCreated',
        event
      });
      return event;
    }

    updateActivityPrompt(cmd) {
      const event = this.mapper(cmd);
      this.raiseEvent({
        eventName: 'activityPromptUpdated',
        event
      });
      return event;
    }
  };
};
