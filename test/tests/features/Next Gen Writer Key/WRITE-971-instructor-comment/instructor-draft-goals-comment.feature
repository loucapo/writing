Feature: Instructor Can Add Draft Goals Comments To Student Draft
  @db=reset
  Scenario: Instructor Sets Up Student Reflection Environment
    Given I launch the activity as an "instructor"
    And I click "add_draft_button"
    And I reload the page
    When I click "draft(1).add_reflection_questions"
    Then I wait until there is 1 "reflection_questions_modal.close" visible
    When I click "reflection_questions_modal.check(1)"
    When I click "reflection_questions_modal.save"
    And I click "draft.add_draft_goals"
    Then I wait until there is 1 "draft_goals_modal.goal_popup" visible
    And I click "draft_goals_modal.goal_checkbox(1)"
    And I click "draft_goals_modal.goal_save"
    Given I launch the activity as an "student"
    When I click "start_draft"
    And I type "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor neque eget sapien fringilla cursus. Nunc molestie lectus sit amet blandit tempus. Sed et magna fermentum, posuere purus sed, volutpat erat. In hac habitasse platea dictumst. Etiam vitae pharetra lacus. Proin lacinia ex vitae libero pretium commodo. Quisque euismod ultrices mollis. Mauris sit amet turpis arcu. Aliquam erat volutpat. Phasellus ullamcorper tincidunt rhoncus. Nullam pharetra nisl a turpis eleifend, vel ullamcorper magna suscipit. Nulla eleifend mollis dolor, sit amet efficitur lorem dapibus et." in "draft_editor.draft_area"
    And I click "draft_editor.start_reflection"
    And I type "yay" in "student_reflection_questions.student_reflection_text"
    And I click "student_reflection_questions.reflection_button_submit_enabled"
    And I click "student_reflection_questions.draft_submit_confirm"

  @WRITE-973
  Scenario: Zero Draft Goals Should Hide Draft Goals Comment Option
    Given I launch the activity as an "instructor"
    And I click "draft.edit_draft_goals"
    Then I wait until there is 1 "draft_goals_modal.goal_popup" visible
    And I click "draft_goals_modal.goal_checkbox(1)"
    And I click "draft_goals_modal.goal_save"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    When I select text from "Lorem ipsum dolor" to "platea dictumst" in "student_submitted_draft_text"
    Then I wait until there is 0 "add_draft_goals_comment_button" visible

  @WRITE-973
  Scenario: Instructor Draft Goal Choices Should Reflect Availability In Draft Goals Comments
    Given I launch the activity as an "instructor"
    And I click "draft.edit_draft_goals"
    Then I wait until there is 1 "draft_goals_modal.goal_popup" visible
    And I click "draft_goals_modal.goal_checkbox(1)"
    And I click "draft_goals_modal.goal_checkbox(2)"
    And I click "draft_goals_modal.goal_checkbox(3)"
    And I click "draft_goals_modal.goal_checkbox(4)"
    And I click "draft_goals_modal.goal_checkbox(5)"
    And I click "draft_goals_modal.goal_checkbox(6)"
    And I click "draft_goals_modal.goal_save"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    When I select text from "Lorem ipsum dolor" to "platea dictumst" in "student_submitted_draft_text"
    And I click "add_draft_goals_comment_button"
    Then I wait until there is 6 "comment_modal.draft_goal" visible
    And the text of "comment_modal.draft_goal(1)" should include "Thesis"
    And the text of "comment_modal.draft_goal(2)" should include "Reason and Support"
    And the text of "comment_modal.draft_goal(3)" should include "Interpretation/Analysis"
    And the text of "comment_modal.draft_goal(4)" should include "Paragraph Development"
    And the text of "comment_modal.draft_goal(5)" should include "Integration of Research"
    And the text of "comment_modal.draft_goal(6)" should include "Counterarguments"


  @WRITE-1442
  Scenario: The Instructor Opens Modal From Comment Button
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    When I select text from "Lorem ipsum dolor" to "Sed auctor neque eget" in "student_submitted_draft_text"
    And I click "add_draft_goals_comment_button"
    Then I wait until there is 1 "comment_modal.draft_goal_list" visible
    Then I wait until there is 1 "comment_modal.draft_goal_selected(1)" visible
    Then I wait until there is 3 "comment_modal.comment_level_button" visible
    And the text of "comment_modal.comment_level_button(2)" should include "Needs Work"

  @pending=WRITE-1527
  Scenario: The Instructor Selects Draft Goal And Levels
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    When I select text from "Lorem ipsum dolor" to "Sed auctor neque eget" in "student_submitted_draft_text"
    And I click "add_draft_goals_comment_button"
    And I click "comment_modal.needs_work_comment_button"
    Then I wait until there is 1 "comment_modal.draft_goal_level_tag" visible
    And the text of "comment_modal.draft_goal_level_tag" should include "what the what?"

  @WRITE-973
  Scenario: The Instructor Saves Draft Goals Comment
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    When I select text from "Lorem ipsum dolor" to "platea dictumst" in "student_submitted_draft_text"
    And I click "add_draft_goals_comment_button"
    And I click "comment_modal.needs_work_comment_button"
    And I click "comment_modal.save_comment"
    Then I wait until there is 1 "feedback_flag" visible
    And I click "feedback_flag"
    And the text of "feedback_flag" should include "Thesis"
    And the text of "feedback_flag_content" should include "Needs work. Thesis does not present a critical response to the issue."
