
module.exports = function() {
  return class AggregateRootBase {
    constructor() {
      this.uncommittedEvents = [];
    }

    setIsNew() {
      this._isNew = true;
    }

    raiseEvent(event) {
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

    mapper(cmd) {
      let event = {};
      for (let prop in cmd) {
        this[prop] = cmd[prop];
        event[prop] = cmd[prop];
      }
      return event;
    }
  };
};
