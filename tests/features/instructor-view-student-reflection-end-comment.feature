@WRITE-305
Feature: Instructor Can Open Quick Feedback Section

  Scenario: The Instructor Views Responses From The Student To The Reflection Questions
    Given I visit the activity page
    When I open the feedback tool
    Then I see responses to the reflection questions

  Scenario: The Instructor Can View End Comments
    Given I visit the activity page
    When I open the feedback tool
    Then I see the end comment section
