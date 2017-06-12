@WRITE-29
@WRITE-94
Feature: Instructor can view status of student drafts

  @db=reset
  Scenario: Instructor sees option to add draft goals
    Given I launch the activity as an "instructor"
    Then I wait until there is 1 "add_draft_goals" visible

  @db=reset
  Scenario: Instructor sees draft popup to add goals
    Given I launch the activity as an "instructor"
