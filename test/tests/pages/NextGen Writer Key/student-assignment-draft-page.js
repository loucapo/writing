const Page = require('marvin-js').Page;

module.exports = new Page({
  url: { value: '/student' },
  start_draft_1_button: {
    get() {
      return this.element("[data-id='start-draft']:first-of-type");
    }
  },
  start_final_paper_button: {
    get() {
      return this.element("[data-id='start-draft']");
    }
  },
  start_reflection_button: {
    get() {
      return this.element("[data-id='start-reflection']");
    }
  },
  draft_save_button: {
    get() {
      return this.element("[data-id='save-draft']");
    }
  },
  view_activity_summary_link: {
    get() {
      return this.element("[data-id='details-panel-activity-link']");
    }
  },
  activity_details_panel: {
    get() {
      return this.element("[class^='DraftDetailsPanel']");
    }
  },
  activity_draft_panel: {
    get() {
      return this.element("[data-id='draft-activity-detail-panel']");
    }
  },
  activity_draft_instructions_panel: {
    get() {
      return this.element("[data-id='draft-instructions']");
    }
  },
  activity_draft_goals_panel: {
    get() {
      return this.element("[data-id='drafts-goal-list']");
    }
  },
  activity_draft_reflections_panel: {
    get() {
      return this.element("[data-id='reflections-list']");
    }
  },
  activity_prompt_panel: {
    get() {
      return this.element("[data-id='activity-prompt-detail-panel']");
    }
  },
  activity_prompt_details_panel: {
    get() {
      return this.element("[data-id='activity-prompt-content-detail-panel']");
    }
  },
  activity_final_rubric_panel: {
    get() {
      return this.element("[data-id='final-rubric-detail-panel']");
    }
  },
  activity_final_rubric: {
    get() {
      return this.element("[data-id='rubric-preview']");
    }
  },
  activity_summary_rubric_left_arrow: {
    get() {
      return this.element("[data-id='rubric-arrow-left']");
    }
  },
  activity_summary_rubric_right_arrow: {
    get() {
      return this.element("[data-id='rubric-arrow-right']");
    }
  },
  draft_submission_confirmation: {
    get() { return this.element("[class*='MLDialog__alert_container']"); }
  },
  draft_submission_cancel: {
    get() { return this.element("button[data-id='dialog-cancel']"); }
  },
  draft_submission_submit: {
    get() { return this.element("button[data-id='dialog-submit']"); }
  },
  reflection_questions: {
    get() {
      return this.element("[class^='ReflectionQuestions__reflection']");
    }
  },
  reflection_textfields: {
    get() {
      return this.elements("[class^='ReflectionQuestions__reflection'] textarea");
    }
  },
  reflection_polls: {
    get() {
      return this.elements("[class^='ReflectionQuestions__reflection'] form");
    }
  },
  reflection_polls_first_options: {
    get() {
      return this.elements("[class^='ReflectionQuestions__reflection'] form input:first-child");
    }
  },
  reflection_button_submit_enabled: {
    get() {
      return this.element("[data-id='submit-draft']:not([class*='MLButton__disabled'])");
    }
  },
  reflection_button_submit_disabled: {
    get() {
      return this.element("[data-id='submit-draft'][class*='MLButton__disabled']");
    }
  }
});
