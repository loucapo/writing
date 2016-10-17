
module.exports = function(invariant) {
  return class AggregateRootBase {
    constructor() {
      this._id;
      this.uncommittedEvents = [];

      invariant(
        this.commandHandlers,
        'An aggregateRoot requires commandHandlers'
      );

      Object.assign(this, this.commandHandlers());
    }

    raiseEvent(event) {
      this.applyEvent(event);
      this.uncommittedEvents.push(event);
    }

    getUncommittedEvents() {
      return this.uncommittedEvents;
    }

    clearUncommittedEvents() {
      this.uncommittedEvents = [];
    }

    static isAggregateBase() {
      return true;
    }

    isAggregateBase() {
      return true;
    }
  }
};
