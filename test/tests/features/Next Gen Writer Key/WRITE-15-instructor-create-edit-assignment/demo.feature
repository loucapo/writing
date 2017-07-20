Feature: POComponent test

  @db=reset
  Scenario: Setup Student Draft Submission
    Given I launch the activity as an "instructor"
    Then I wait until there is 1 "draft_card" visible
    When I click "add_draft_button"
    Then I wait until there are 2 "draft_card" visible
    Then the text of "draft.title" should be "Draft 1"
    Then the text of "draft(1).title" should be "Draft 1"
    Then the text of "draft(2).title" should be "Final Paper"
    When I click "draft(2).add_reflection_questions"
    Then I wait until there is 1 "reflection_questions_modal.close" visible
    When I click "reflection_questions_modal.check(4)"
    When I click "reflection_questions_modal.check(2)"
    When I click "reflection_questions_modal.check(5)"
    Then I wait until there are 3 "reflection_questions_modal.check__checked" visible
    When I click "reflection_questions_modal.save"
    Then I sleep for 1 seconds
    Then the text of "draft(2).reflection_question(2)" should be "free: ben boba hutt mandal"
    Then the text of "draft(2).reflection_question(3)" should be "fixed: ace moff fisto calamari thrawn. Padmé qui-gon kit"
