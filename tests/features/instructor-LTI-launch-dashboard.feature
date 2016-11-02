@WRITE-183
  @WRITE-330
Feature: Instructor Can View the Dashboard After LTI Launch

  # This test is broken until post MVI
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

    @only
    # App needs editable data for this to run
  # Scenario: The Instructor Sees Fresh Data
    # Given I log in to the Moodle Site
    # When I launch Writing Tools from the Moodle LTI host
   # And Writing Tools Launch handles the request
   # And I see the activity summary page
   # And I close the current session
   # And I open a new session
   # And I log in to the Moodle Site
   # And I launch Writing Tools from the Moodle LTI host
   # And Writing Tools Launch handles the request
   # And I see the activity summary page
   # Then I see my course data has reset

