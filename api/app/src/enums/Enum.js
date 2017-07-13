/**
 * Created by johnteague on 10/28/16.
 */

module.exports = function Enum() {

  /* eslint-disable no-param-reassign */
  return class Enumeration {
    constructor(name, ...items) {
      if (!name) {
        throw new Error('an Enumeration must have a name assigned to it');
      }
      if (!items || items.length <= 0) {
        throw new Error('an Enumeration must have at least one item in it');
      }

      items.forEach(item => {
        if (!item.key) {
          throw new Error('an Enumeration must have a key');
        }
        item.display = item.display || item.key;
        const propertyAttrs = {
          configurable: false,
          enumerable: true,
          writable: false,
          value: item};
        Object.defineProperty(this, item.key, propertyAttrs);
        Object.freeze(item);
        this[item.name] = item;
      });
      this.all = items;
      this.name = name;
      Object.freeze(this);
    }

    fromKey(key) {
      return this.all.find(item => item.key === key);
    }

    fromDisplay(display) {
      return this.all.find(item => item.display === display);
    }

    static isSame(a, b) {
      return a.name === b.name;
    }

    toArray() {
      return this.all;
    }
  };
};
