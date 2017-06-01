@WRITE-749
Feature: Instructor Can Add Description in Activity Prompt
  @pending=WRITE-872
  Scenario: The Instructor Adds Activity Prompt
    Given I launch the activity as a 'instructor'
    When I click a 'add_activity_prompt_link'
    Then I see the rte 'activity_prompt_editor'

  Scenario: The Instructor Adds Activity Prompt (Alt route)
    Given I launch the activity as a 'instructor'
    When I click a 'activity_prompt_edit'
    Then I see the rte 'activity_prompt_editor'

  @pending=RTE
  Scenario: WYSIWYG Display
    Given I launch the activity as a 'instructor'
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
    Given I launch the activity as a 'instructor'
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
    @Bug
  Scenario: WYSIWYG Display Cancel
    Given I launch the activity as a 'instructor'
    When I click a 'activity_prompt_edit'
    And I focus the content editor
    And I type in 'happy'
    When I click a 'activity_prompt_cancel'
    And I see the 'add_activity_prompt_link'

  @pending=RTE
  Scenario: WYSIWYG Display Saves
    Given I launch the activity as a 'instructor'
    And I click a "activity_prompt_edit"
    And I focus the content editor
    And I type in 'happy'
    And I click the "activity_prompt_save"
    Then I should see "happy" in the content editor
    And I click a "activity_prompt_edit"
    And I select "happy"
    And I click the bold button
    And I click the italics button
    And I click the "activity_prompt_save"
    Then Text "happy" should have italicized styling
    And Text "happy" should have bold styling

  @Bug
  @db=reset
  Scenario: WYSIWYG Display Cancel
    Given I launch the activity as a 'instructor'
    And I click a 'activity_prompt_edit'
    And I type in 'happy'
    And I click a 'activity_prompt_save'
    Then I should see "happy" in the content editor
    And I click a 'activity_prompt_edit'
    And I select "happy"
    And I type in 'hello world'
    And I click a 'activity_prompt_cancel'
    Then Text "hello world" should not appear

  @Bug
  @db=reset
  Scenario: WYSIWYG Display Move Away From Page
    Given I launch the activity as a 'instructor'
    And I click a 'activity_prompt_edit'
    And I type in 'happy'
    And I click a 'activity_prompt_save'
    And I click a 'activity_prompt_edit'
    And I select "happy"
    And I type in 'hello world'
    And I click a 'activity_prompt_cancel'
    And I reload the page
    Then Text "hello world" should not appear

  @db=reset
  Scenario: WYSIWYG Display Alternate Save
    Given I launch the activity as a 'instructor'
    And I click a 'activity_prompt_edit'
    And I type in 'happy'
    And I click on the page
    Then I should see "happy" in the content editor
    And The WYSIWYG editor should be closed
    
  @db=reset
  Scenario: Editing the Activity Prompt
    Given I launch the activity as a 'instructor'
    And I click a 'activity_prompt_edit'
    And I type in 'happy'
    And I click a 'activity_prompt_save'
    And I click a 'activity_prompt_edit'
    Then I should see "happy" in the content editor
    And I click a 'activity_prompt_save'
