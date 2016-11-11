@WRITE-281
Feature: Instructor Can Open Student Paper And Give Feedback
  Scenario: The Instructor Opens Student Submission
    Given I visit the activity page
    # waiting for @WRITE-278 to finish so that this step can be implemented
    #When I open a student submission
    When I open the feedback tool
    Then I should see the student essay in the feedback tool

  Scenario: The Instructor Closes Quick Feedback Library
    Given I visit the activity page
    When I open the feedback tool
    And I click on the Quick Feedback Library
    And I click on the Quick Feedback Library
    Then The Quick Feedback Library should be closed
