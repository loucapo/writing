@only
Feature: POComponent test

  @db=reset
  @only
  Scenario: Setup Student Draft Submission
    Given I launch the activity as an "instructor"
    Then I wait until there is 1 "draft_card" visible
    When I click "add_draft_button"
    Then I wait until there are 2 "draft_card" visible
    Then the text of "draft(1).title" should be "Draft 1"
    Then the text of "draft(2).title" should be "Final Paper"
    When I click "draft(1).add_reflection_questions"
    Then I sleep for 2 seconds
    Then I wait until there is 1 "reflection_questions_modal.close" visible
    Then the text of "draft(2).reflection_question(1)" should be "free: utt ben yavin fett naboo calamari. Obi-wan mon coruscant c"
    Then the text of "draft.reflection_question(2)" should be "free: ben boba hutt mandal"
    Then the text of "draft_title" should be "Assignment Prompt"
