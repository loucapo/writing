@only
Feature: POComponent test

  @db=reset
  @only
  Scenario: Setup Student Draft Submission
    Given I launch the activity as an "instructor"
    Then I wait until there is 1 "draft_card"
    #When I click "add_reflection_questions"
    Then the text of "draft.title" should be "Final Paper"
