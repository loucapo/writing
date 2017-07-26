@WRITE-823
@TOREFACTOR
Feature: Student Views Reflection Questions
  @db=reset
  Scenario: Instructor Sets Up Student Reflection Environment
    Given I launch the activity as an "instructor"
    When I click "add_reflection_questions"
    When I click "ref_question_check" [1]
    When I click "ref_question_check" [4]
    And I click "ref_question_save"

  Scenario: Student Reflection State
    Given I launch the activity as an "student"
    When I click "start_draft"
    And I type "Happy birthday Writer Key!" in "draft_area"
    And I click "start_reflection"
    Given I launch the activity as an "student"
    When I click "start_draft"
    Then the text of "draft_area" should be "Happy birthday Writer Key!"

  Scenario: Student Moves To Reflection Screen
    Given I launch the activity as an "student"
    When I click "start_draft"
    And I type "Happy birthday Writer Key!" in "draft_area"
    And I click "start_reflection"
    Then I wait until there is 1 "student_reflection_text" visible
    Then I wait until there is 5 "reflection_polls_radio_button" visible
    Then I wait until there is 1 "reflection_button_submit_disabled" visible

  Scenario: Student Able to Submit
    Given I launch the activity as an "student"
    When I click "start_draft"
    And I type "Happy birthday Writer Key!" in "draft_area"
    And I click "start_reflection"
    And I type "yay" in "student_reflection_text"
    And I click "reflection_polls_radio_button" [1]
    And I click "reflection_button_submit_enabled"
    Then I wait until there is 1 "reflection_button_submit_enabled" visible

  Scenario: Student Does Not Submit Draft
    Given I launch the activity as an "student"
    When I click "start_draft"
    And I type "Happy birthday Writer Key!" in "draft_area"
    And I click "start_reflection"
    And I type "yay" in "student_reflection_text"
    And I click "reflection_polls_radio_button" [1]
    And I click "reflection_button_submit_enabled"
    And I click "draft_submit_cancel"
    Then I wait until there is 1 "reflection_button_submit_enabled" visible
    Then I wait until there is 5 "reflection_polls_radio_button" visible
    Then I wait until there is 1 "student_reflection_text" visible
    And the text of "student_reflection_text" should include "yay"

  Scenario: Student Submits Draft
    Given I launch the activity as an "student"
    When I click "start_draft"
    And I type "Happy birthday Writer Key!" in "draft_area"
    And I click "start_reflection"
    And I type "yay" in "student_reflection_text"
    And I click "reflection_polls_radio_button" [1]
    And I click "reflection_button_submit_enabled"
    And I click "draft_submit_confirm"
    Then I wait until there is 1 "view_final_draft_button" visible
    Then I wait until there is 1 "success_flash" visible
    Then I wait until there is 1 "draft_submission_date" visible

@pending
      # How to cause error? Is this more of an API test with a bad payload?
  Scenario: Student Submits Draft And Receives Error
  Given I launch the activity as an "student"
  When I click "start_draft"
  And I type "Happy birthday Writer Key!" in "draft_area"
  And I click "start_reflection"
  And I type "yay" in "student_reflection_text"
  And I click "reflection_polls_radio_button" [1]
  And I click "reflection_button_submit_enabled"
  And Student clicks 'draft_submission_submit'
    #And I crash my computer
    And Student sees 'draft_submission_error'
