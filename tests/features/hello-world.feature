Feature: Searching from the homepage
  
  Scenario: Say Hello
    Given I visit the home page
    Then I should see header 'Assignment Title'

  Scenario: Click for greeting
    Given I visit the home page
    When I click the button 'Click'
    Then I should see a greeting
