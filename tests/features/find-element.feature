Feature: Searching the assignment page for data-id = "activity-title"
  
  Scenario: View activity
    Given I visit the activity page
    Then I should see header with data-id: "Assignment Title"
