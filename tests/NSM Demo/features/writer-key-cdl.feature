@WRITE-558
@WRITE-552
@NSM
#pending and commented out lines are missing class names from CDL
Feature: CDL Updates
  Scenario: Fonts on The Activity Page Should Be CDL Fonts
    Given I visit the activity page
    Then the activity page should show 'SourceSansPro-Regular' font

  Scenario: Fonts on The Feedback Page Should Be CDL Fonts
    Given I visit the activity page
    And I open the feedback tool
    Then the feedback tool page shows 'SourceSansPro-Regular' font
    But the RTE shows 'Georgia' font

  Scenario: Icons should Appear Where Appropriate
    Given I visit the activity page
    Then I see a '[icon]' icon

  Where:
  ---
  icon
  arrow
  #minus
  calendar
  dropdown_caret

  @pending
  Scenario: Checkmarks should Appear on student submission page
    Given I visit the activity page
    And I click on the 'student submissions tab'
    Then I see a 'checkmark' icon
