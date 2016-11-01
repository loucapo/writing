@WRITE-278
Feature: Instructor Can Review Student Submissions

  Scenario: The Instructor Navigates to Student Submissions
    Given I visit the activity page
    When I click on the student submissions tab
    Then I see a student roster
    And I see student submission information for Draft 1
    And I see submission status
    And I see the draft due date
    And The review type is Instructor Review

  Scenario: The Instructor Sends All Completed Reviews
    Given I visit the activity page
    When I click on the student submissions tab
    Then I can send all completed reviews

  Scenario: The Instructor Switches Draft Views
    Given I visit the activity page
    When I click on the student submissions tab
    Then I switch drafts to Final Draft