var Page = require('marvin-js').Page;

module.exports = new Page({


// assignment header
	url: { value: '/activity/13630184-5955-4dbe-9908-ab065f1bcad2' },
	title: { get: function () { return this.element("[data-id='activity-title']"); } },
	// course still needs to be separated from the class name in db
	//course: { get: function () { return this.element("[data-id='activity-course']"); } },
	type: { get: function () { return this.element("[data-id='activity-desc']"); } },

// assignment details
	rhetoric_genre: { get: function() { return this.element("[data-id='activity-rhetoric-rubric']"); } },
	rubric: { get: function () { return this.element("[data-id='activity-rubric']"); } },
	prompt: { get: function () { return this.element("[data-id='activity-prompt']"); } },
	prompt_edit: { get: function () { return this.element("[data-id='edit-assignment']"); } },

// sub menu
	sub_menu: { get: function () { return this.element("[data-id='assignment-menu']"); } },
	student_submissions: { get: function () { return this.element("[data-id='student-submissions']"); } },
	

// draft sequence
	draft_names: { get: function () { return this.elements("[data-id='draft-item-draft-name']"); } },


// draft details
	drafts_review_type: { get: function() { return this.elements("[data-id='draft-item-type']"); } },
	drafts_due_dates: { get: function() { return this.elements("[data-id='draft-item-due-date']"); } },


// draft learning objectives
	draft_learning_objectives: { get: function() { return this.elements("[data-id='draft-item-learning-objectives']"); } },

// draft grading policies
	draft_grading_policies: { get: function () { return this.elements("[data-id='grading-policy']"); } },

});

