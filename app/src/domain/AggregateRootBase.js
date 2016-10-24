
module.exports = function(invariant) {
  return class AggregateRootBase {
    constructor() {
      this._id;
      this._isNew;
      this.uncommittedEvents = [];
    }

    setIsNew() {
      this._isNew = true
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
  }
};
