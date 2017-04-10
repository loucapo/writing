module.exports = function(EntityBase) {
  return class Draft extends EntityBase {
    constructor(draft) {
      super();
      this.type = 'Draft';
      if (draft) {
        this.mapper(draft);
      }
    }

    updateInstruction(instructions) {
      this.instructions = instructions;
    }
  };
};
