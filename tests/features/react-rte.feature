@react-rte
Feature: React-RTE wysiwyg editor


  Scenario: Say Hello
    Given I visit the wysiwyg editor page
    When I focus the content editor and type in Hello
    Then I should see Hello in the content editor


  Scenario: Embolden Text
    Given I visit the wysiwyg editor page
    When "happy" is in the editor
    And I select "happy"
    And I click the bold button
    Then Text "happy" should have bold styling


  Scenario: Italicize Text
    Given I visit the wysiwyg editor page
    When "happy" is in the editor
    And I select "happy"
    And I click the italics button
    Then Text "happy" should have italicized styling


  Scenario: Monospace Text
    Given I visit the wysiwyg editor page
    When "happy" is in the editor
    And I select "happy"
    And I click the monospace button
    Then Text "happy" should have monospace styling


  Scenario: Strikethrough Text
    Given I visit the wysiwyg editor page
    When "happy" is in the editor
    And I select "happy"
    And I click the strikethrough button
    Then Text "happy" should have strikethrough styling


  Scenario: Unordered List
    Given I visit the wysiwyg editor page
    And Enter "3" lines of text
    When I select all "content"
    And I click the unordered list button
    Then there should be "3" unordered list items

  Scenario: Ordered List
    Given I visit the wysiwyg editor page
    And Enter "3" lines of text
    When I select all "content"
    And I click the ordered list button
    Then there should be "3" ordered list items


  Scenario: Blockquote Text
    Given I visit the wysiwyg editor page
    When "happy" is in the editor
    And I select "happy"
    And I click the blockquote button
    Then Text "happy" should have a blockquote


  Scenario: Link Text
    Given I visit the wysiwyg editor page
    When "happy" is in the editor
    And I select "happy"
    And I click the link button
    And Add "google.com"
    Then Text "happy" should have a link

  @only
  Scenario: Remove Link Text
    Given I visit the wysiwyg editor page
    When "happy" is in the editor
    And I select "happy"
    And I click the link button
    And Add "google.com"
    And Text "happy" should have a link
    And I click the remove link button
    Then Text "happy" should not have a link