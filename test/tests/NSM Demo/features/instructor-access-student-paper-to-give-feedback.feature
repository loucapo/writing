@WRITE-281
@NSM
Feature: Instructor Can Open Student Paper And Give Feedback

  Scenario: The Instructor Opens Student Submission
    Given I visit the activity page
    Then I click on the 'student submissions tab'
    Then I click link 'Start Review' in 'Jane Austen row'
    Then the extended url is 'feedbackTool/123'
    And I should see the student essay in the feedback tool
