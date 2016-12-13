@WRITE-558

Feature: CDL Fonts
  Scenario: Fonts on The Activity Page Should Be CDL Fonts
    Given I visit the activity page
    Then the activity page should show 'SourceSansPro-Regular' font

  Scenario: Fonts on The Feedback Page Should Be CDL Fonts
    Given I visit the activity page
    And I open the feedback tool
    Then the feedback tool page shows 'SourceSansPro-Regular' font
    But the RTE shows 'Georgia' font

