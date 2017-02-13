@WRITE-438
  @only
Feature: Instructor Creates Drafting Revising Activity
  Scenario: The Instructor Creates Drafting Revising Activity
    Given I visit the SLS create activity page
    When I create a drafting revising activity
    Then I should see a new assignment created

  Scenario: Green Confirmation Message Exists After Creating Assignment
    Given I visit the SLS create activity page
    When I create a drafting revising activity
    Then I should see a new assignment created
    And I should see a green confirmation message at the top

  Scenario: Green Confirmation Message Exists After Creating Assignment Persists
    Given I visit the SLS create activity page
    When I create a drafting revising activity
    And I should see a new assignment created
    And I should see a green confirmation message at the top
    And I reload the page
    Then I should see a green confirmation message at the top

  Scenario: Green Confirmation Message Exists After Creating Assignment Until Closed
    Given I visit the SLS create activity page
    When I create a drafting revising activity
    And I should see a new assignment created
    And I should see a green confirmation message at the top
    And I close the green confirmation message
    And I reload the page
    Then I do not see the green confirmation message

  Scenario: Activity Fields Created
    Given I visit the SLS create activity page
    When I create a drafting revising activity
    And I should see a new assignment created
    Then I should see a 'empty activity prompt'
    And I should see a 'unselected rubric' with option to select
    And I should see a option to add another draft
    And I should see a empty draft that says "Final Draft" as the header
    And I should see a review type displaying 'Instructor Review'
    And I should see a draft focus section
    And I should see a option to add draft instructions
    And I should see a option to add student reflection questions
    @pending
    # And I should see a option to define a title
    # And I should see a option to assign to students
    # And I should see a option to add select grade type