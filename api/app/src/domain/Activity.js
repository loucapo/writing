
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
      event.activityId = this.activityId = cmd.activityId || uuid.v4();
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

    updateActivityRubric(cmd) {
      const event = this.mapper(cmd);
      this.raiseEvent({
        eventName: 'activityPromptRubric',
        event
      });
      return event;
    }
    addDraftToActivity(cmd) {
      // check business rules here

      cmd.draftId = uuid.v4();
      cmd.activityId = this.activityId;
      this.drafts = this.bumpDraftIndexes(this.drafts);

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
        if (x.draftId === cmd.draftId) {
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
      invariant(this.drafts.length > 1, 'An Activity must have at least one Draft');
      const event = this.mapper(cmd);

      // check business rules here
      this.drafts = this.drafts.reduce((acc, d) => {
        if (d.draftId !== cmd.draftId) {
          acc.push(d);
        }
        return acc;
      }, []);

      this.drafts = this.orderedDrafts(this.drafts);
      this.drafts = this.updatedDrafts(this.drafts);
      this.raiseEvent({
        eventName: 'removeDraftFromActivity',
        event
      });

      return event;
    }

    getDraftIndexes() {
      return this.drafts.map(x => ({draftId: x.draftId, index: x.index}));
    }

    setDraftGoals(cmd) {
      let draft = this.drafts.find(x => x.draftId === cmd.draftId);
      invariant(draft, `No draft with id: ${cmd.draftId} could be found`);
      const event = this.mapper(cmd);

      draft.setDraftGoals(cmd);
      return event;
    }

    setStudentReflectionQuestions(cmd) {
      const event = this.mapper(cmd);
      let draft = this.drafts.find(x => x.draftId === cmd.draftId);
      invariant(draft, `No draft with id: ${cmd.draftId} could be found`);
      draft.setStudentReflectionQuestions(cmd);
      return event;
    }
    getDraftGoalsByDraftId(cmd) {
      return this.drafts.find(x => x.draftId === cmd.draftId).goals.map(x => ({draftId: cmd.draftId, goalId: x}));
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
      return drafts.map((x, i) => {
        x.updateIndex(i);
        return x;
      });
    }

    bumpDraftIndexes(drafts) {
      return drafts.map(x => {
        x.index++;
        return x;
      });
    }
  };
};
