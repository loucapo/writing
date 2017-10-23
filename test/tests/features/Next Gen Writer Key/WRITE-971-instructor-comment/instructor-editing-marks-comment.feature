Feature: Instructor Can Add Editing Mark Comments To Student Draft
  @dbreset
  Scenario: Instructor Sets Up Student Reflection Environment
    Given I launch the activity as an "instructor"
    And I click "add_draft_button"
    And I reload the page
    Then I sleep for 5 seconds
    When I click "draft(1).add_reflection_questions"
    Then I wait until there is 1 "reflection_questions_modal.close" visible
    When I click "reflection_questions_modal.check(1)"
    When I click "reflection_questions_modal.save"
    And I click "rubric.dropdown"
    And I click "rubric.dropdown_option(2)"
    Given I launch the activity as an "student"
    When I click "start_draft"
    And I type "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac gravida sapien. Mauris volutpat pretium erat eget varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis tincidunt varius sollicitudin. Proin rhoncus lacus vel lorem placerat dictum. Nulla sapien dolor, mattis quis tempus nec, porta nec nibh. Duis odio purus, sollicitudin sit amet sapien sed, rhoncus venenatis neque. Curabitur quis felis id ipsum ultrices vestibulum. Quisque condimentum sem aliquam, sollicitudin mauris at, tincidunt leo. Aliquam vitae neque arcu. Vivamus at pulvinar nisi. Sed ultrices eros in ipsum luctus dapibus. Ut non rutrum nibh. Phasellus cursus ultricies ligula, sit amet vulputate diam placerat sed." in "draft_editor.draft_area"
    And I click "draft_editor.start_reflection"
    And I type "yay" in "student_reflection_questions.student_reflection_text"
    And I click "student_reflection_questions.reflection_button_submit_enabled"
    And I click "student_reflection_questions.draft_submit_confirm"

  @WRITE-1440
  Scenario: The Instructor Selects Editing Mark And Sees Levels
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    Then I wait until there is 1 "student_submitted_draft_text" visible
    When I select text from "Vivamus at" to "pulvinar nisi" in "student_submitted_draft_text"
    And I click "add_editing_marks_comment_button"
    And I click "comment_modal.feedback_preset_menu_item(2)"
    And the text of "comment_modal.feedback_preset_text_preview" should include "A fragment is an incomplete sentence."
    Then I wait until there is 1 "comment_modal.add_comment_textarea" visible
    And I click "comment_modal.save_comment"
    Then I sleep for 1 seconds

  @WRITE-1440
  Scenario: The Instructor Selects Editing Mark And Adds A Comment
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    Then I wait until there is 1 "student_submitted_draft_text" visible
    When I select text from "Lorem ipsum dolor" to "gravida sapien" in "student_submitted_draft_text"
    And I click "add_editing_marks_comment_button"
    And I click "comment_modal.feedback_preset_menu_item(12)"
    And the text of "comment_modal.feedback_preset_text_preview" should include "Do I have data to support my claims?"
    And the text of "comment_modal.feedback_preset_text_preview" should include "Can I identify any places in my writing where readers might need more detail?"
    Then I wait until there is 1 "comment_modal.add_comment_textarea" visible
    And I click "comment_modal.save_comment"
    Then I sleep for 1 seconds

  @WRITE-974
  Scenario: The Instructor Saves Draft Goals Comment
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    Then I wait until there are 2 "feedback_flag" visible
    And the text of "feedback_flag(1)" should include "Fragment"
    And the text of "feedback_flag(2)" should include "Needs Evidence"
    Then I sleep for 1 seconds
