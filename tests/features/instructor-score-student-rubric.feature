@WRITE-60
@only
Feature: Instructor Can Open the Rubric in Feedback Tool

  Scenario: The Instructor Gives Student a Score on the Rubric
    Given I visit the activity page
    And I open the feedback tool
    When I click the 'header button'
    And I click 'exceeds expectations' for 'thesis'
    Then I see the 'exceeds expectations' 'thesis' box highlighted
    And I see the score '4' next to 'thesis'

  Scenario: The Instructor Gives Student a Different Score on the Rubric
    Given I visit the activity page
    And I open the feedback tool
    When I click the 'header button'
    And I click 'exceeds expectations' for 'thesis'
    And I click 'meets expectations' for 'thesis'
    Then I see the 'meets expectations' 'thesis' box highlighted
    And I see the score '3' next to 'thesis'
    And I do not see the 'exceeds expectations' 'thesis' box highlighted
    And I do not see the score '4' next to 'thesis'

  Scenario: The Instructor Grades Student Across Whole Rubric
    Given I visit the activity page
    And I open the feedback tool
    When I click the 'header button'
    And I click 'exceeds expectations' for 'thesis'
    And I click 'meets expectations' for 'claims'
    And I click 'meets expectations' for 'evidence'
    And I click 'nearly meets expectations' for 'logical appeals'
    And I click 'fails to meet expectations' for 'counterargument'
    Then I see the 'exceeds expectations' 'thesis' box highlighted
    And I see the score '4' next to 'thesis'
    And I see the 'meets expectations' 'claims' box highlighted
    And I see the score '3' next to 'claims'
    And I see the 'meets expectations' 'evidence' box highlighted
    And I see the score '3' next to 'evidence'
    And I see the 'nearly meets expectations' 'logical appeals' box highlighted
    And I see the score '2' next to 'logical appeals'
    And I see the 'fails to meet expectations' 'counterargument' box highlighted
    And I see the score '1' next to 'counterargument'