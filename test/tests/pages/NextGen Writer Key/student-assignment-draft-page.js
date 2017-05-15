const Page = require('marvin-js').Page;

module.exports = new Page({
  url: { value: '/student' },
  start_draft_1_button: {
    get() {
      return this.element("[data-id='start-Draft 1']");
    }
  },
  start_final_paper_button: {
    get() {
      return this.element("[data-id='start-Final Paper']");
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
  }
});
