# This was never really a full feature, just a stop-gap implementation
# to test out tooling, and the story to remove it happened unnoticed.
# The actual tests might still be useful to reapply somewhere somewhen else though.
@pending=retired
@react-rte
@NSM
Feature: React-RTE wysiwyg editor

  Scenario: Say Happy
    Given I visit the wysiwyg editor page
    When I focus the content editor
    And I type in "happy"
    Then I should see "happy" in the content editor

  Scenario: Embolden Text
    Given I visit the wysiwyg editor page
    When I focus the content editor
    And I type in "happy"
    And I select "happy"
    And I click the bold button
    Then Text "happy" should have bold styling


  Scenario: Italicize Text
    Given I visit the wysiwyg editor page
    When I focus the content editor
    And I type in "happy"
    And I select "happy"
    And I click the italics button
    Then Text "happy" should have italicized styling


  Scenario: Monospace Text
    Given I visit the wysiwyg editor page
    When I focus the content editor
    And I type in "happy"
    And I select "happy"
    And I click the monospace button
    Then Text "happy" should have monospace styling

  Scenario: Strikethrough Text
    Given I visit the wysiwyg editor page
    When I focus the content editor
    And I type in "happy"
    And I select "happy"
    And I click the strikethrough button
    Then Text "happy" should have strikethrough styling


  Scenario: Unordered List
    Given I visit the wysiwyg editor page
    And Enter "3" lines of text
    When I select all content
    And I click the unordered list button
    Then there should be "3" unordered list items

  Scenario: Ordered List
    Given I visit the wysiwyg editor page
    And Enter "3" lines of text
    When I select all content
    And I click the ordered list button
    Then there should be "3" ordered list items


  Scenario: Blockquote Text
    Given I visit the wysiwyg editor page
    When I focus the content editor
    And I type in "happy"
    And I select "happy"
    And I click the blockquote button
    Then Text "happy" should have a blockquote


  Scenario: Link Text
    Given I visit the wysiwyg editor page
    When I focus the content editor
    And I type in "happy"
    And I select "happy"
    And I click the link button
    And Add "google.com"
    Then Text "happy" should have a link

  Scenario: Remove Link Text
    Given I visit the wysiwyg editor page
    When I focus the content editor
    And I type in "happy"
    And I select "happy"
    And I click the link button
    And Add "google.com"
    And I click the remove link button
    Then Text "happy" should not have a link


  Scenario: Normal Heading
    Given I visit the wysiwyg editor page
    When I focus the content editor
    And I type in "happy"
    And I select "happy"
    Then Text "happy" should have a normal header

  Scenario: Large Heading
    Given I visit the wysiwyg editor page
    When I focus the content editor
    And I type in "happy"
    And I select "happy"
    And I choose a large heading
    Then Text "happy" should have a h1 header

  Scenario: Medium Heading
    Given I visit the wysiwyg editor page
    When I focus the content editor
    And I type in "happy"
    And I select "happy"
    And I choose a medium heading
    Then Text "happy" should have a h2 header

  Scenario: Small Heading
    Given I visit the wysiwyg editor page
    When I focus the content editor
    And I type in "happy"
    And I select "happy"
    And I choose a small heading
    Then Text "happy" should have a h3 header

  Scenario: Code Block
    Given I visit the wysiwyg editor page
    When I focus the content editor
    And I type in "happy"
    And I select "happy"
    And I choose a code block
    Then Text "happy" should have a code block

  Scenario: Undo
    Given I visit the wysiwyg editor page
    When I focus the content editor
    And I type in "happy"
    And I click the undo button
    Then Text "happy" should not appear

  Scenario: Redo
    Given I visit the wysiwyg editor page
    When I focus the content editor
    And I type in "happy"
    And I click the undo button
    And I click the redo button
    Then I should see "happy" in the content editor
