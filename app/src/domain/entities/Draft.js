module.exports = function(EntityBase, invariant) {
  return class Draft extends EntityBase {
    constructor(draft) {
      super();
      this.type = 'Draft';
      this.goals = [];
      if (draft) {
        this.mapper(draft);
      }
    }

    updateInstruction(instructions) {
      this.instructions = instructions;
    }

    setDraftGoals(cmd) {
      invariant(cmd.goals.length <= 6, `A draft can have no more than 6 goals`);
      this.goals = cmd.goals;
    }
  };
};
