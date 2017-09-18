@WRITE-970
Feature: Instructor Gives Score to Final Paper
  @db=reset
  Scenario: Instructor Sets Up Student Reflection Environment
    Given I launch the activity as an "instructor"
    And I click "add_draft_button"
    And I reload the page
    When I click "draft(1).add_reflection_questions"
    Then I wait until there is 1 "reflection_questions_modal.close" visible
    When I click "reflection_questions_modal.check(1)"
    When I click "reflection_questions_modal.check(4)"
    When I click "reflection_questions_modal.save"
    Given I launch the activity as an "student"
    Then I sleep for 1 seconds
    When I click "start_draft"
    And I type "Happy birthday Writer Key!" in "draft_editor.draft_area"
    And I click "draft_editor.start_reflection"
    And I type "yay" in "student_reflection_questions.student_reflection_text"
    And I click "student_reflection_questions.reflection_polls_radio_button(1)"
    And I click "student_reflection_questions.reflection_button_submit_enabled"
    And I click "student_reflection_questions.draft_submit_confirm"

  Scenario: Instructor Sees No Grading Box On Draft 1
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    Then I sleep for 1 seconds
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    Then I wait until there is 0 "final_grade_box" visible

  @db=reset
  Scenario: Instructor Sets Up Student Reflection Environment
    Given I launch the activity as an "instructor"
    When I click "draft(1).add_reflection_questions"
    Then I wait until there is 1 "reflection_questions_modal.close" visible
    When I click "reflection_questions_modal.check(1)"
    When I click "reflection_questions_modal.check(4)"
    When I click "reflection_questions_modal.save"
    Given I launch the activity as an "student"
    When I click "start_draft"
    And I type "Happy birthday Writer Key!" in "draft_editor.draft_area"
    And I click "draft_editor.start_reflection"
    And I type "yay" in "student_reflection_questions.student_reflection_text"
    And I click "student_reflection_questions.reflection_polls_radio_button(1)"
    And I click "student_reflection_questions.reflection_button_submit_enabled"
    And I click "student_reflection_questions.draft_submit_confirm"

  Scenario: Instructor Sees Grading Box On Final Paper
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    Then I wait until there is 1 "final_grade_box" visible

  Scenario: Instructor Gives a Decimal Grade
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I type "70.5" in "final_grade_box"
    Then I wait until there is 1 "final_grade_box_error" visible
    Then I wait until there is 1 "final_grade_box_save_disabled" visible

  Scenario: Instructor Gives a Trailing Space Grade
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I type "70 " in "final_grade_box"
    Then I wait until there is 1 "final_grade_box_save_enabled" visible

  Scenario: Instructor Gives a Grade over 100
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I type "8099" in "final_grade_box"
    Then I wait until there is 1 "final_grade_box_error" visible
    Then I wait until there is 1 "final_grade_box_save_disabled" visible

  Scenario: Instructor Gives a Grade "B"
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I type "B" in "final_grade_box"
    Then the text of "final_grade_box" should be ""
    Then I wait until there is 1 "final_grade_box_save_disabled" visible

  Scenario: Instructor Gives a Negative Grade
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I type "-78" in "final_grade_box"
    Then the text of "final_grade_box" should be ""

  Scenario: Instructor Gives a Grade 0-100 and Saves
    Given I launch the activity as an "instructor"
    And I click "student_submissions"
    And I click "submissions.row_start(1)"
    And Changing to using page "instructor_feedback"
    And I type "95" in "final_grade_box"
    And I click "final_grade_box_save_enabled"
    Then I wait until there is 0 "final_grade_box_save" visible



