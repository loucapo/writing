@WRITE-96

Feature: Student Views Activity

  @db=reset
  Scenario: Student Launches into Activity with No Rubric Selected
    Given I launch the activity as a "student"
    And Changing to using page "instructor_summary"
    Then I wait until there are 1 "draft.title"
    Then the text of "draft(1).title" should be "Final Paper"
    Then I wait until there are 0 "rubric.preview"
    Then I wait until there are 0 "student_draft_note"
    Then I wait until there are 0 "activity_prompt.description"
    And Changing to using page "student_summary"
    Then the text of "start_draft_enabled" should be "Start Final Paper"

  @db=reset
  Scenario: Student Does Not See Instructer Options
    Given I launch the activity as a "student"
    And Changing to using page "instructor_summary"
    Then I wait until there are 0 "success_flash"
    Then I wait until there are 0 "activity_prompt.edit"
    Then I wait until there are 0 "activity_prompt.delete"
    Then I wait until there are 0 "add_draft_button"
    Then I wait until there are 0 "draft.add_draft_goals"
    Then I wait until there are 0 "draft.edit_draft_goals"
    Then I wait until there are 0 "draft.add_reflection_questions"
    Then I wait until there are 0 "draft.add_draft_instructions"
    Then I wait until there are 0 "student_preview"
  @only
  @db=reset
  Scenario: Student Launches into Full Activity with More Than One Draft
    Given I launch the activity as an "instructor"
    When I click "add_draft_button"
    And I click "activity_prompt.edit"
    And I type "hello world" in "activity_prompt.edit_area"
    And I click "activity_prompt.save"
    When I click "rubric.dropdown"
    When I click "rubric.dropdown_option(2)"
    Given I launch the activity as a "student"
    And Changing to using page "instructor_summary"
    #Then I wait until there are 2 "draft.title"
    Then the text of "draft.title(1)" should be "Draft 1"
    #Then the text of "draft.title(2)" should be "Final Paper"
    Then the text of "activity_prompt.description" should be "hello world"
    Then the text of "rubric.preview_name" should be "Analysis"
    Then the text of "student_draft_note" should be "You will be able to view and start this draft once you've received feedback on Draft 1"
    And Changing to using page "student_summary"
    Then the text of "start_draft_enabled" should be "Start Draft 1"

