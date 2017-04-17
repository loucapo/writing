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
      let result = {
        addGoals: [],
        removeGoals: []
      };
      cmd.goals.forEach(g => {
        if (this.goals.every(existingGoalId => existingGoalId !== g)) {
          result.addGoals.push(g);
          this.goals.push(g);
        }
      });

      this.goals.forEach(g => {
        if (cmd.goals.every(newGoalId => newGoalId !== g)) {
          result.removeGoals.push(g);
          this.goals = this.goals.filter(x => x !== g);
        }
      });
      return result;
    }
  };
};
