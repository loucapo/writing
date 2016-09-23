@react-rte
Feature: React-RTE wysiwyg editor
  
  Scenario: Say Hello
    Given I visit the wysiwyg wrapper page
	 When I focus the content editor and type in Hello
    Then I should see Hello in the content editor

