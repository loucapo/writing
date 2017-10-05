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
    And I click "rubric.dropdown"
    And I click "rubric.dropdown_option(2)"
    Given I launch the activity as an "student"
    When I click "start_draft"
    And I type "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor neque eget sapien fringilla cursus. Nunc molestie lectus sit amet blandit tempus. Sed et magna fermentum, posuere purus sed, volutpat erat. In hac habitasse platea dictumst. Etiam vitae pharetra lacus. Proin lacinia ex vitae libero pretium commodo. Quisque euismod ultrices mollis. Mauris sit amet turpis arcu. Aliquam erat volutpat. Phasellus ullamcorper tincidunt rhoncus. Nullam pharetra nisl a turpis eleifend, vel ullamcorper magna suscipit. Nulla eleifend mollis dolor, sit amet efficitur lorem dapibus et." in "draft_editor.draft_area"
    And I click "draft_editor.start_reflection"
    And I type "yay" in "student_reflection_questions.student_reflection_text"
    And I click "student_reflection_questions.reflection_button_submit_enabled"
    And I click "student_reflection_questions.draft_submit_confirm"

  @WRITE-1442
  Scenario: The Instructor Opens Modal From Comment Button
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    Then I wait until there is 1 "student_submitted_draft_text" visible
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
    And I click "comment_modal.draft_goal(2)"
    And I click "comment_modal.comment_level_button(2)"
    Then I wait until there is 1 "comment_modal.draft_goal_level_tag" visible
    And the text of "comment_modal.draft_goal_level_tag" should include "what the what?"