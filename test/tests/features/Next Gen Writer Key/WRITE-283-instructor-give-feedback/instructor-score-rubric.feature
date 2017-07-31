@WRITE-967
  @only
Feature: Instructor Can Score Rubric
  @db=reset

  Scenario: Setup submission grid
    Given I launch the activity as an "instructor"
    When I click "draft(1).add_reflection_questions"
    When I click "reflection_questions_modal.check(1)"
    When I click "reflection_questions_modal.check(4)"
    When I click "reflection_questions_modal.save"
    Given I launch the activity as an "student"
    When I click "start_draft"
    And I type "Cookies are the best dessert known to man." in "draft_editor.draft_area"
    And I click "draft_editor.start_reflection"
    And I type "yay" in "student_reflection_questions.student_reflection_text"
    And I click "student_reflection_questions.reflection_polls_radio_button(1)"
    And I click "student_reflection_questions.reflection_button_submit_enabled"
    And I click "student_reflection_questions.draft_submit_confirm"

  Scenario: Instructor Sees No Rubric if No Rubric Selected
    Given I launch the activity as an "instructor"
    When I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    Then I wait until there is 0 "rubric_eval" visible

  Scenario: Instructor Sees Rubric if Rubric Selected
    Given I launch the activity as an "instructor"
    When I click "rubric.dropdown"
    When I click "rubric.dropdown_option(2)"
    When I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    Then I wait until there is 1 "rubric_eval" visible

  Scenario: Instructor Scores Rubric
    Given I launch the activity as an "instructor"
    When I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I click "rubric_row_1(5)"
    Then the color of "rubric_row_1(5)" should be "#acdba2"

  Scenario: Instructor Changes Level
    Given I launch the activity as an "instructor"
    When I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I click "rubric_row_1(4)"
    And I click "rubric_row_1(3)"
    Then the color of "rubric_row_1(3)" should be "#ffc196"
    Then I wait until there is 0 "yellow_criteria_selected" visible
@only
  Scenario: Instructor Scores Whole Rubric
    Given I launch the activity as an "instructor"
  And I maximize the browser
    When I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
  When I scroll to the end of the page
    And I click "rubric_row_1(5)"
    And I sleep for 1 seconds
    And I click "rubric_row_5(2)"
  And I sleep for 1 seconds
    And I click "rubric_row_4(3)"
  And I sleep for 1 seconds
    And I click "rubric_row_2(4)"
  And I sleep for 1 seconds
    And I click "rubric_row_3(3)"
  And I sleep for 1 seconds
    Then the color of "rubric_row_1(5)" should be "#acdba2"
    Then the color of "rubric_row_2(4)" should be "#faf2a9"
    Then the color of "rubric_row_3(3)" should be "#ffc196"
    Then the color of "rubric_row_4(3)" should be "#ffc196"
    Then the color of "rubric_row_5(2)" should be "#ffafaf"

  Scenario: Instructor Unselects Level
    Given I launch the activity as an "instructor"
    When I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I click "rubric_row_1(4)"
    And I click "rubric_row_1(4)"
    Then I wait until there is 0 "yellow_criteria_selected" visible

  Scenario: Instructor Cannot Save With No Level
    Given I launch the activity as an "instructor"
    When I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    Then I wait until there is 1 "rubric_save_disabled" visible

  Scenario: Instructor Save Level Enabled
    Given I launch the activity as an "instructor"
    When I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I click "rubric_row_1(4)"
    Then I wait until there is 1 "rubric_save_enabled" visible

  Scenario: Instructor Leaves Page Without Saving
    Given I launch the activity as an "instructor"
    When I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I click "rubric_row_1(4)"
    And I reload the page
    Then I wait until there is 0 "yellow_criteria_selected" visible

  Scenario: Instructor Cancels Save On Whole Rubric
    Given I launch the activity as an "instructor"
    When I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I click "rubric_row_1(4)"
    And I click "rubric_row_2(3)"
    And I click "rubric_row_3(3)"
    And I click "rubric_row_4(2)"
    And I click "rubric_row_5(1)"
    And I click "rubric_save_enabled"
    And I click "rubric_save_cancel"
    Then I wait until there is 1 "rubric_save_enabled" visible
    And I click "rubric_row_1(3)"
    Then the color of "rubric_row_1(3)" should be "#ffc196"

  Scenario: Instructor Submits Whole Rubric
    Given I launch the activity as an "instructor"
    And I maximize the browser
    When I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I click "rubric_row_1(4)"
    And I click "rubric_row_2(3)"
    And I click "rubric_row_3(3)"
    And I click "rubric_row_4(2)"
    And I click "rubric_row_5(1)"
    And I click "rubric_save_enabled"
    And I click "rubric_save_confirm"
    Then I wait until there is 0 "rubric_save_enabled"
    Then I wait until there is 1 "rubric_display" visible