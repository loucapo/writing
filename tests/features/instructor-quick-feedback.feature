@WRITE-286
Feature: Instructor Can Open Quick Feedback Section

  Scenario: The Instructor Opens Quick Feedback Library
    Given I visit the activity page
    When I open the feedback tool
    And I click on the Quick Feedback Library
    Then I see a menu of common feedback marks

  Scenario: The Instructor Closes Quick Feedback Library
    Given I visit the activity page
    When I open the feedback tool
    And I click on the Quick Feedback Library
    And I click on the Quick Feedback Library
    Then The Quick Feedback Library should be closed
