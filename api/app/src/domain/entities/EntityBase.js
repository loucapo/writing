module.exports = function() {
  return class EntityBase {
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
