@WRITE-559
@only
Feature: Instructor Can View Rubric Overview from Activity Summary Page

  Scenario: The Instructor Adds An Other Comment
    Given I visit the activity page
    Then I see 'rubric heading' in elem 'final rubric'
    Then I see 'rubric edit' in elem 'final rubric'
    Then I see link with text 'Show Rubric Levels' in elem 'final rubric'
    Then I see elem 'rubric-button' with text 'Edit' in elem 'final rubric'
    Then I see text 'Argument Rubric' in elem 'final rubric'
    Then I see text 'Thesis' in elem 'final rubric'
    Then I see text 'Claims' in elem 'final rubric'
    Then I see text 'Evidence' in elem 'final rubric'
    Then I see text 'Logical Appeals' in elem 'final rubric'
    Then I see text 'Counterargument' in elem 'final rubric'
