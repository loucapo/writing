@WRITE-749

  # Things to think about: after saving will, cause other tests on subsequent runs to fail, so need to create a fresh one each time unless we create a cleanup script?
Feature: Instructor Can Add Description in Activity Prompt
  Scenario: The Instructor Adds Activity Prompt
    Given I visit the activity page
    When I click a "pencil icon"
    Then A WYSIWYG editor should open

  Scenario: The Instructor Adds Activity Prompt (Alt route)
    Given I visit the activity page
    When I click a "Click to add a prompt button"
    Then A WYSIWYG editor should open

  Scenario: WYSIWYG Display
    Given I visit the activity page
    And I click a "Click to add a prompt button"
    And A WYSIWYG editor should open
    And I type in "happy"
    And I select "happy"
    And I click the bold button
    And I click the italics button
    Then Text "happy" should have italicized styling
    And Text "happy" should have bold styling

  Scenario: WYSIWYG Display Saves
    Given I visit the activity page
    And I click a "Click to add a prompt button"
    And A WYSIWYG editor should open
    And I type in "happy"
    And I select "happy"
    And I click the bold button
    And I click the italics button
    And I click the save button
    Then Text "happy" should have italicized styling
    And Text "happy" should have bold styling

  Scenario: WYSIWYG Display Cancel
    Given I visit the activity page
    And I click a "Click to add a prompt button"
    And A WYSIWYG editor should open
    And I type in "happy"
    And I select "happy"
    And I click the bold button
    And I click the italics button
    And I click the cancel button
    Then there should be no text in the WYSIWG editor

  Scenario: WYSIWYG Display Saves
    Given I visit the activity page
    And I click a "Click to add a prompt button"
    And A WYSIWYG editor should open
    And I type in "happy"
    And I click the save button
    Then I should see "happy" in the content editor
    And I click a "Click to add a prompt button"
    And I select "happy"
    And I click the bold button
    And I click the italics button
    And I click the save button
    Then Text "happy" should have italicized styling
    And Text "happy" should have bold styling

  Scenario: WYSIWYG Display Cancel
    Given I visit the activity page
    And I click a "Click to add a prompt button"
    And A WYSIWYG editor should open
    And I type in "happy"
    And I click the save button
    Then I should see "happy" in the content editor
    And I click a "Click to add a prompt button"
    And I select "happy"
    And I click the bold button
    And I click the italics button
    And I click the cancel button
    Then Text "happy" should not have italicized styling
    And Text "happy" should not have bold styling

  Scenario: WYSIWYG Display Move Away From Page
    Given I visit the activity page
    And I click a "Click to add a prompt button"
    And A WYSIWYG editor should open
    And I type in "happy"
    And I click the save button
    And I click a "Click to add a prompt button"
    And I select "happy"
    And I click the bold button
    And I click the italics button
    And I refresh the page
    Then Text "happy" should not have italicized styling
    And Text "happy" should not have bold styling

  Scenario: WYSIWYG Display Alternate Save
    Given I visit the activity page
    And I click a "Click to add a prompt button"
    And A WYSIWYG editor should open
    And I type in "happy"
    And I click on the page
    Then I should see "happy" in the content editor
    And The WYSIWYG editor should be closed

  Scenario: Editing the Activity Prompt
    Given I visit the activity page
    And I click a "Click to add a prompt button"
    And A WYSIWYG editor should open
    And I type in "happy"
    And I click the save button
    Then I should see an option to edit the activity prompt

  Scenario: Editing the Activity Prompt Continued
    Given I visit the activity page
    And I click a "Click to add a prompt button"
    And A WYSIWYG editor should open
    And I type in "happy"
    And I click the save button
    And I click a "Click to add a prompt button"
    Then I should see "happy" in the content editor