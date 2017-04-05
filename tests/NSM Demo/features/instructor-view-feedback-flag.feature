@WRITE-374
  @pending=retired
@NSM
  #post-CDL fixes removed the pre-set example feedback flag
Feature: Instructor Can View Feedback Flags

  Scenario: The Instructor views predefined feedback flag
    Given I visit the activity page
    When I open the feedback tool
    Then I see a 'pre-defined feedback comment'

  Scenario: The Instructor clicks on predefined feedback flag
    Given I visit the activity page
    When I open the feedback tool
    And I click a 'pre-defined feedback comment'
    Then I see content 'You do a nice job presenting these two sides; however, you're not staking a claim in this argument. Your thesis is buried and unclear.' in 'instructor feedback content'
    And I see publisher content

  Scenario: The Instructor closes predefined feedback flag
    Given I visit the activity page
    When I open the feedback tool
    And I click a 'pre-defined feedback comment'
    And I click a 'instructor feedback content'
    Then I do not see the instructor feedback content
    And I do not see the publisher content