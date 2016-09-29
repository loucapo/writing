@react-rte
Feature: React-RTE wysiwyg editor
  
  Scenario: Say Hello
    Given I visit the wysiwyg wrapper page
    When I focus the content editor and type in Hello
    Then I should see Hello in the content editor


  Scenario: Embolden Text
    Given I visit the wysiwyg bold button
    When "happy" is in the editor
    And I select "happy"
    And I click the bold button
    Then Text "happy" should have bold styling


  Scenario: Italicize Text
    Given I visit the wysiwyg bold button
    When "happy" is in the editor
    And I select "happy"
    And I click the italics button
    Then Text "happy" should have italicized styling


  Scenario: Monospace Text
    Given I visit the wysiwyg bold button
    When "happy" is in the editor
    And I select "happy"
    And I click the monospace button
    Then Text "happy" should have monospace styling


  Scenario: Strikethrough Text
    Given I visit the wysiwyg bold button
    When "happy" is in the editor
    And I select "happy"
    And I click the strikethrough button
    Then Text "happy" should have strikethrough styling


  Scenario: Unordered List
    Given Enter "3" lines of text
    When I select all "content"
    And I click the unordered list button
    Then there should be "3" unordered list items
  @Only
  Scenario: Ordered List
    Given Enter "3" lines of text
    When I select all "content"
    And I click the ordered list button
    Then there should be "3" ordered list items

