
module.exports = function(AggregateRootBase, entities, invariant, uuid) {
  return class Activity extends AggregateRootBase {
    constructor(activity) {
      super();
      this.type = 'Activity';
      this.drafts = [];
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

    addDraftToActivity(cmd) {
      // check business rules here
      cmd.draftId = uuid.v4();
      let draft = new entities.Draft(cmd);
      this.drafts.push(draft);

      const event = this.mapper(cmd);
      this.raiseEvent({
        eventName: 'draftAddedToActivity',
        event
      });
      return event;
    }

    updateDraftInstructions(cmd) {
      const event = this.mapper(cmd);
      // check business rules here
      this.drafts = this.drafts.map(x => {
        if (x.id === cmd.draftId) {
          x.updateInstruction(cmd.instructions);
        }
      });

      this.raiseEvent({
        eventName: 'draftInstructionsUpdated',
        event
      });
      return event;
    }

    removeDraftFromActivity(cmd) {
      const event = this.mapper(cmd);
      // check business rules here
      this.drafts = this.drafts.reduce((acc, d) => {
        if (d.id !== cmd.draftId) {
          acc.push(d);
        }
      });
      this.drafts = this.orderedDrafts(this.drafts);
      this.drafts = this.updatedDrafts(this.drafts);

      this.raiseEvent({
        eventName: 'removeDraftFromActivity',
        event
      });

      let result = {event, drafts: this.drafts};
      return result;
    }


    orderedDrafts(drafts) {
      return drafts.sort((a, b) => {
        if (a.index < b.index) {
          return -1;
        }
        if (a.index > b.index) {
          return 1;
        }
        return 0;
      });
    }

    updatedDrafts(drafts) {
      return drafts.map((x, i) => x.updateIndex(i));
    }
  };
};
