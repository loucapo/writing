@WRITE-897
Feature: Launch Spec Updates
  # cuz what the test expects is wrong, but what the app does now can't be right either.
  # it redirects to `/resource`
  @pending='needed-when-SLS-integration-happens'
  Scenario: User Redirect 
    Given I open the Writer Key Next Gen Application
    Then Page Element Checker Verifies Text: '404' at 'body > pre'

  Scenario: Instructor Sees Default Activity
    Given I launch the activity as a 'instructor'
    Then I see the default activity page

  Scenario: Student Sees Default Activity
    Given I launch the activity as a 'student'
    Then I see the default activity page

  Scenario: Instructor Creates New Activity
    Given I create a new activity as '/instructor'
    Then I should see a new assignment created
    And I am not on the default activity page

#Should have better error handling, but those are going up as bugs
  Scenario: Student Cannot Create New Activity
    Given I create a new activity as '/student'
    Then Page Element Checker Verifies: '0' '[data-id='activity-title']'
