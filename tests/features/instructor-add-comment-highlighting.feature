@only
@WRITE-355
Feature: Instructor Can Add Comments to Highlighting

  Scenario: The Instructor Adds An Other Comment
    Given I visit the activity page
    When I open the feedback tool
    And I click on the "Other" feedback
    And I see a comment popup appear
    And I add text to the comment popup
    And I click save on the comment popup
    Then The comment should persist on the page

  Scenario: The Instructor Does not Saves An Other Comment
    Given I visit the activity page
    When I open the feedback tool
    And I click on the "Other" feedback
    And I see a comment popup appear
    And I add text to the comment popup
    And I click save on the comment popup
    Then The comment should not persist on the page