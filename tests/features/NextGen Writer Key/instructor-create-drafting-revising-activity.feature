@WRITE-438

Feature: Instructor Creates Drafting Revising Activity
  Scenario: The Instructor Creates Drafting Revising Activity
    Given I visit the SLS create activity page
    Then I should see a new assignment created

  Scenario: Green Confirmation Message Exists After Creating Assignment
    Given I visit the SLS create activity page
    Then I should see a new assignment created
    And the confirmation message is green

  Scenario: Green Confirmation Message Exists After Creating Assignment Persists
    Given I visit the SLS create activity page
    And I should see a new assignment created
    And I reload the page
    Then I see the 'confirmation_message'
@pending
  Scenario: Green Confirmation Message Exists After Creating Assignment Until Closed
    Given I visit the SLS create activity page
    When I create a drafting revising activity
    And I should see a new assignment created
    And I should see a green confirmation message at the top
    And I close the green confirmation message
    And I reload the page
    Then I do not see the green confirmation message

  #activity prompt description requires fresh activity for it to be a valid test. On hold

  Scenario: Activity Fields Created
    Given I visit the SLS create activity page
    And I should see a new assignment created
    Then I should see the Assignment Header elements
    And I should see the Assignment Details elements
    And I should see the Rubric Details elements
    And I scroll down the activity page
    And I should see the Draft elements
    And The 'activity_prompt_description' should be 'Click to add prompt'
    And The 'rubric_selection' should be 'Select Rubric'
    And The 'final_draft_header' should be 'Final Draft'
    And The 'drafts_review_type' should be 'Instructor Review'
    # And I should see a option to assign to students