@WRITE-466
@WRITE-551
@NSM
Feature: Instructor Can Launch to Activity Page
  Scenario: The Instructor Launches the Activity from Launch Route
    Given I go to the launch url
    Then I see the activity summary page

  # wait for post MVI to add supertest to check API for the POST
  @pending
  Scenario: The Instructor Launches the Activity from Launch Route with a POST body
    Given I go to the launch url
    And Send a POST body with it
    Then I see the activity summary page