@WRITE-60
Feature: Instructor Can Open the Rubric in Feedback Tool

  Scenario: The Instructor Gives Student a Score on the Rubric
    Given I visit the activity page
    And I open the feedback tool
    When I click the 'header button'
    And I click 'exceeds expectation' for 'thesis'
    Then I see the 'exceeds expectation' thesis box highlighted
    And I see the score '4' next to thesis

  Scenario: The Instructor Gives Student a Different Score on the Rubric
    Given I visit the activity page
    And I open the feedback tool
    When I click the 'header button'
    And I click 'exceeds expectation' for 'thesis'
    And I click 'meets expectation' for 'thesis'
    Then I see the 'meets expectation' thesis box highlighted
    And I see the score '3' next to thesis
    And I do not see the 'exceeds expectation' thesis box highlighted
    And I do not see the score '4' next to thesis

  Scenario: The Instructor Grades Student Across Whole Rubric
    Given I visit the activity page
    And I open the feedback tool
    When I click the 'header button'
    And I click 'exceeds expectation' for 'thesis'
    And I click 'meets expectation' for 'claims'
    And I click 'meets expectation' for 'evidence'
    And I click 'near meets expectation' for 'logical appeals'
    And I click 'fails to meet expectation' for 'counterargument'
    Then I see the 'exceeds expectation' 'thesis' box highlighted
    And I see the score '4' next to 'thesis'
    And I see the 'meets expectation' 'claims' box highlighted
    And I see the score '3' next to 'claims'
    And I see the 'meets expectation' 'evidence' box highlighted
    And I see the score '3' next to 'evidence'
    And I see the 'near meets expectation' 'logical appeals' box highlighted
    And I see the score '2' next to 'logical appeals'
    And I see the 'fails to meet expectation' 'counterargument' box highlighted
    And I see the score '1' next to 'counterargument'