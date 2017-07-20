@WRITE-96
Feature: Student Views Activity

  @db=reset
  Scenario: Student Launches into Activity with No Rubric Selected
    Given I launch the activity as a "student"
    Then I wait until there are 1 "draft.draft_card_title"
    Then the text of "draft(1).draft_card_title" should be "Final Paper"
    Then the text of "start_draft_enabled" should be "Start Final Paper"
    Then I wait until there are 0 "rubric_preview"
    Then I wait until there are 0 "student_draft_note"
    Then I wait until there are 0 "activity_prompt_description"


  @db=reset
  Scenario: Student Does Not See Instructer Options
    Given I launch the activity as a "student"
    Then I wait until there are 0 "success_flash"
    Then I wait until there are 0 "activity_prompt_edit"
    Then I wait until there are 0 "activity_prompt_delete"
    Then I wait until there are 0 "add_draft_button"
    Then I wait until there are 0 "add_draft_goals"
    Then I wait until there are 0 "edit_draft_goals"
    Then I wait until there are 0 "add_reflection_questions"
    Then I wait until there are 0 "add_draft_instructions"
    Then I wait until there are 0 "student_preview"

  @db=reset
  Scenario: Student Launches into Full Activity with More Than One Draft
    Given I launch the activity as an "instructor"
    When I click "add_draft_button"
    And I click "activity_prompt_edit"
    And I type "hello world" in "draft_area"
    And I click "activity_prompt_save"
    When I click "rubric_dropdown"
    When I click "rubric_dropdown_option" [2]
    Given I launch the activity as a "student"
    Then I wait until there are 2 "draft_card_title"
    Then the text of "draft_card_title" [1] should be "Draft 1"
    Then the text of "draft_card_title" [2] should be "Final Paper"
    Then the text of "activity_prompt_description" should be "hello world"
    Then I wait until there are 2 "draft_card_title"
    Then the text of "rubric_preview_name" should be "Analysis"
    Then the text of "student_draft_note" should be "You will be able to view and start this draft once you've received feedback on Draft 1"
    Then the text of "start_draft_enabled" should be "Start Draft 1"

