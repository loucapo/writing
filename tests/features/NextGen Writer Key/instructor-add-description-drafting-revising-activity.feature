@WRITE-749
@Cleanup
  # all tests are sharing the same default assignment and we don't have an out-of-test-band way to clean it up and reset it- remove reset step and refactor tests once we do
Feature: Instructor Can Add Description in Activity Prompt
  Scenario: The Instructor Adds Activity Prompt
    Given I visit the SLS create activity page
    When I click a 'add_activity_prompt_link'
    Then I see the rte 'activity_prompt_editor'

  Scenario: The Instructor Adds Activity Prompt (Alt route)
    Given I visit the SLS create activity page
    When I click a 'activity_prompt_edit'
    Then I see the rte 'activity_prompt_editor'

  @pending=RTE
  Scenario: WYSIWYG Display
    Given I visit the SLS create activity page
    When I click a 'activity_prompt_edit'
    And I focus the content editor
    And I type in "happy"
    And I select "happy"
    And I click the bold button
    And I click the italics button
    Then Text "happy" should have italicized styling
    And Text "happy" should have bold styling

  @pending=RTE
  Scenario: WYSIWYG Display Saves
    Given I visit the SLS create activity page
    And I click a "activity_prompt_edit"
    And I focus the content editor
    And I type in "happy"
    And I select "happy"
    And I click the bold button
    And I click the italics button
    And I click the "activity_prompt_save"
    Then Text "happy" should have italicized styling
    And Text "happy" should have bold styling

  @Firefox
  Scenario: WYSIWYG Display Cancel
    Given I visit the SLS create activity page
    When I click a 'activity_prompt_edit'
    And I focus the content editor
    And I type in "happy"
    When I click a 'activity_prompt_cancel'
    And I see the 'add_activity_prompt_link'

  @pending=RTE
  Scenario: WYSIWYG Display Saves
    Given I visit the SLS create activity page
    And I click a "activity_prompt_edit"
    And I focus the content editor
    And I type in "happy"
    And I click the "activity_prompt_save"
    Then I should see "happy" in the content editor
    And I click a "activity_prompt_edit"
    And I select "happy"
    And I click the bold button
    And I click the italics button
    And I click the "activity_prompt_save"
    Then Text "happy" should have italicized styling
    And Text "happy" should have bold styling

  Scenario: WYSIWYG Display Cancel
    Given I visit the SLS create activity page
    And I click a 'activity_prompt_edit'
    And I type in "happy"
    And I click a 'activity_prompt_save'
    Then I should see "happy" in the content editor
    And I click a 'activity_prompt_edit'
    And I select "happy"
    And I type in "hello world"
    And I click a 'activity_prompt_cancel'
    Then Text "hello world" should not appear
    And I reset the assignment prompt for the next test

  Scenario: WYSIWYG Display Move Away From Page
    Given I visit the SLS create activity page
    And I click a 'activity_prompt_edit'
    And I type in "happy"
    And I click a 'activity_prompt_save'
    And I click a 'activity_prompt_edit'
    And I select "happy"
    And I type in "hello world"
    And I click a 'activity_prompt_cancel'
    And I reload the page
    Then Text "hello world" should not appear
    And I reset the assignment prompt for the next test

  Scenario: WYSIWYG Display Alternate Save
    Given I visit the SLS create activity page
    And I click a 'activity_prompt_edit'
    And I type in "happy"
    And I click on the page
    Then I should see "happy" in the content editor
    And The WYSIWYG editor should be closed
    And I reset the assignment prompt for the next test

  Scenario: Editing the Activity Prompt
    Given I visit the SLS create activity page
    And I click a 'activity_prompt_edit'
    And I type in "happy"
    And I click a 'activity_prompt_save'
    And I click a 'activity_prompt_edit'
    Then I should see "happy" in the content editor
    And I click a 'activity_prompt_save'
    And I reset the assignment prompt for the next test

    #Not a test case but need to reset the assignment prompt after each run - ensure to make sure if other tests break, at end will still clear
  Scenario: Clear Activity Prompt
    Given I visit the SLS create activity page
    And I click a 'activity_prompt_edit'
    And I focus the content editor
    And I select all content
    And I delete text
    And I click a 'activity_prompt_save'
    And I see the 'add_activity_prompt_link'