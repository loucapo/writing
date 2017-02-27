@WRITE-27

Feature: React-RTE wysiwyg editor

  Scenario: Adding Another Draft
    Given I visit the activity page
    When I click on "Add another draft"
    Then A new draft will be added above the existing draft
    And I see a prompt to Add draft description
    And I see a prompt to Add draft focus
    And I see a prompt to Add Student Reflection Questions
    And I see the review type is instructor review

  Scenario: Adding First Draft
    Given I visit the activity page
    When I click on "Add another draft"
    Then A new draft will be added above the existing draft
    And the trash can on the Final Paper should become activated
    And the draft tally within header should be increased by one

  Scenario: Adding Multiple Drafts
    Given I visit the activity page
    When I click on "Add another draft"
    Then I should see "Draft 1"
    When I click on "Add another draft"
    Then I should see "Draft 2"
    And the last draft should be "Final Paper"

  Scenario: Draft Sequencing
    Given I visit the activity page
    When I click on "Add another draft"
    When I click on "Add another draft"
    Then I should see "Draft 2"
    And a message for instructors on student sequencing should appear

  Scenario: Removing Drafts
    Given I visit the activity page
    When I click on "Add another draft"
    When I click on "Add another draft"
    And I should see "Draft 2"
    And I click on the trash can of "Draft 1"
    And a confirmation message appears
    And I click "Yes"
    Then "Draft 1" should be removed
    And the draft tally within header should decrease by one
    And I should see "Draft 1"

  Scenario: Removing Final Paper
    Given I visit the activity page
    When I click on "Add another draft"
    And I click on the trash can of "Final Paper"
    And a confirmation message appears
    And I click "Yes"
    Then the second to last draft should be renamed "Final Paper"
    And the trash can on "Final Paper" is inactive

  Scenario: Adding Description to the Draft
    Given I visit the activity page
    When I click on "Add another draft"
    And I click on add draft description
    Then a WYSIWYG editor appears
