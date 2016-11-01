@WRITE-183
Feature: Instructor Can View the Dashboard After LTI Launch

  # Scenario: The Instructor Launches the Dashboard from LTI
   # Given I log in to the Moodle Site
   # When I launch Writing Tools from the Moodle LTI host
   # And Writing Tools Launch handles the request
   # Then I see the Writing Center dashboard

  Scenario: The Instructor Launches the Activity Summary Page from LTI
    Given I log in to the Moodle Site
    When I launch Writing Tools from the Moodle LTI host
    And Writing Tools Launch handles the request
    Then I see the activity summary page

