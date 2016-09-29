@react-rte
Feature: React-RTE wysiwyg editor
  
  Scenario: Say Hello
    Given I visit the wysiwyg wrapper page
    When I focus the content editor and type in Hello
    Then I should see Hello in the content editor

  @Only
  Scenario: Embolden Text
    Given I visit the wysiwyg bold button
    When "happy" is in the editor
    And I select "happy"
    And I click the bold button
    Then Text "happy" should have bold styling

  Scenario: Italicize Text
    Given Text-Italics is in the editor
    When I select Text-Italics
    And I click the italic button
    Then Text should have italic styling

  Scenario: Monospace Text
    Given Text-Monospace is in the editor
    When I select Text-Monospace
    And I click the monospace button
    Then Text should have monospace styling
    
  Scenario: Strikethrough Text
    Given Text-Strikethrough is in the editor
    When I select Text-Strikethrough
    And I click the strikethrough button
    Then Text should have strikethrough styling

  Scenario: Unordered List
    Given 3 lines exist to become an unordered list
    When I select the 3 lines for unordered list
    And I click the unordered list button
    And I add one more unordered line
    Then there should be 4 unordered list items

