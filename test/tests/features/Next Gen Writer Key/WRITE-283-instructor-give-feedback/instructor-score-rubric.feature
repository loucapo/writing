@WRITE-967
  @pending
Feature: Instructor Can Score Rubric
  @db=reset
  Scenario: Setup submission grid
    Given I launch the activity as an "instructor"
    When I click "add_reflection_questions"
    When I click "ref_question_check" [1]
    When I click "ref_question_check" [4]
    And I click "ref_question_save"
    Given I launch the activity as a "student"
    When I click "start_draft"
    And I type "Cookies are the best dessert known to man. Round, with the capacity to be topped with all the manner of chocolate or candy, it's the perfect treat no matter how young or old one is." in "draft_area"
    And I click "start_reflection"
    And I type "yay" in "student_reflection_text"
    And I click "reflection_polls_radio_button" [1]
    And I click "reflection_button_submit_enabled"
    And I click "draft_submit_confirm"

  Scenario: Instructor Sees No Rubric if No Rubric Selected
    Given I launch the activity as an "instructor"
    When I click "student_submissions"
    And I click "review_status_start_review"
    Then I wait until there is 0 "rubric_eval" visible

  Scenario: Instructor Sees Rubric if Rubric Selected
    Given I launch the activity as an "instructor"
    When I click "rubric_dropdown"
    When I click "rubric_dropdown_option" [2]
    When I click "student_submissions"
    And I click "review_status_start_review"
    Then I wait until there is 1 "rubric_eval" visible

  Scenario: Instructor Scores Rubric
    # This probably needs to change to I click "xxxx" [y] assuming each column is labeled with a data-id
    Given I launch the activity as an "instructor"
    When I click "student_submissions"
    And I click "review_status_start_review"
    And I click 'exceeds expectations' for 'thesis'
    # something like this for the color one (already a core step to validate color)
    Then "thesis" [1] color should be "green"
    And I see the score 'exceeds expectations' '4' next to 'thesis'

  Scenario: Instructor Changes Level
    Given I launch the activity as an "instructor"
    When I click "student_submissions"
    And I click "review_status_start_review"
    And I click 'exceeds expectations' for 'thesis'
    And I click 'meets expectations' for 'thesis'
    Then I see the 'meets expectations' 'thesis' box highlighted 'yellow'
    And I see the score 'meets expectations' '3' next to 'thesis'
    And I do not see the 'exceeds expectations' 'thesis' box highlighted
    And I do not see the score 'exceeds expectations' '4' next to 'thesis'

  Scenario: Instructor Scores Whole Rubric
    Given I launch the activity as an "instructor"
    When I click "student_submissions"
    And I click "review_status_start_review"
    And I click 'exceeds expectations' for 'thesis'
    And I click 'meets expectations' for 'claims'
    And I click 'meets expectations' for 'evidence'
    And I click 'nearly meets expectations' for 'logical appeals'
    And I click 'fails to meet expectations' for 'counterargument'
    Then I see the 'exceeds expectations' 'thesis' box highlighted 'green'
    And I see the score 'exceeds expectations' '4' next to 'thesis'
    And I see the 'meets expectations' 'claims' box highlighted 'yellow'
    And I see the score 'meets expectations' '3' next to 'claims'
    And I see the 'meets expectations' 'evidence' box highlighted 'yellow'
    And I see the score 'meets expectations' '3' next to 'evidence'
    And I see the 'nearly meets expectations' 'logical appeals' box highlighted 'orange'
    And I see the score 'nearly meets expectations' '2' next to 'logical appeals'
    And I see the 'fails to meet expectations' 'counterargument' box highlighted 'red'
    And I see the score 'fails to meet expectations' '1' next to 'counterargument'

  Scenario: Instructor Unselects Level
    Given I launch the activity as an "instructor"
    When I click "student_submissions"
    And I click "review_status_start_review"
    And I click 'exceeds expectations' for 'thesis'
    And I click 'exceeds expectations' for 'thesis'
    And I do not see the 'exceeds expectations' 'thesis' box highlighted
    And I do not see the score 'exceeds expectations' '4' next to 'thesis'

  Scenario: Instructor Cannot Save With No Level
    Given I launch the activity as an "instructor"
    When I click "student_submissions"
    And I click "review_status_start_review"
    Then I wait until there is 1 "rubric_save:disabled" visible

  Scenario: Instructor Save Level Enabled
    Given I launch the activity as an "instructor"
    When I click "student_submissions"
    And I click "review_status_start_review"
    And I click 'exceeds expectations' for 'thesis'
    Then I wait until there is 1 "rubric_save" visible

  Scenario: Instructor Leaves Page Without Saving
    Given I launch the activity as an "instructor"
    When I click "student_submissions"
    And I click "review_status_start_review"
    And I click 'exceeds expectations' for 'thesis'
    And I refresh the page
    Then I do not see the 'exceeds expectations' 'thesis' box highlighted
    And I do not see the score 'exceeds expectations' '4' next to 'thesis'

  Scenario: Instructor Submits Whole Rubric
    Given I launch the activity as an "instructor"
    When I click "student_submissions"
    And I click "review_status_start_review"
    And I click 'exceeds expectations' for 'thesis'
    And I click 'meets expectations' for 'claims'
    And I click 'meets expectations' for 'evidence'
    And I click 'nearly meets expectations' for 'logical appeals'
    And I click 'fails to meet expectations' for 'counterargument'
   And I click 'rubric_save'
    And I click 'confirm'
    Then I wait until there is 0 "rubric_save" visible
    And I click 'exceeds expectations' for 'claims'
    And I see the 'meets expectations' 'claims' box highlighted 'yellow'

  Scenario: Instructor Cancels Save On Whole Rubric
    Given I launch the activity as an "instructor"
    When I click "student_submissions"
    And I click "review_status_start_review"
    And I click 'exceeds expectations' for 'thesis'
    And I click 'meets expectations' for 'claims'
    And I click 'meets expectations' for 'evidence'
    And I click 'nearly meets expectations' for 'logical appeals'
    And I click 'fails to meet expectations' for 'counterargument'
    And I click 'rubric_save'
    And I click 'cancel'
    Then I wait until there is 1 "rubric_save" visible
    And I click 'exceeds expectations' for 'claims'
    And I see the 'exceeds expectations' 'claims' box highlighted 'green'