@WRITE-559
@NSM
Feature: Instructor Can View Rubric Overview from Activity Summary Page

  Scenario: The Instructor Adds An Other Comment
    Given I visit the activity page
    Then I see 'rubric heading' in component 'final rubric'
    Then I see 'rubric edit' in component 'final rubric'
    Then I see a link with text 'Show Rubric Levels' in element 'final rubric'
    Then I see a button with text 'Edit' in element 'final rubric'
    Then I see text 'Argument Rubric' in element 'final rubric'
    Then I see text 'Thesis' in element 'final rubric'
    Then I see text 'Claims' in element 'final rubric'
    Then I see text 'Evidence' in element 'final rubric'
    Then I see text 'Logical Appeals' in element 'final rubric'
    Then I see text 'Counterargument' in element 'final rubric'
