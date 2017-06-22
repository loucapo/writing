@WRITE-826
Feature: Instructor Can Open Feedback Tool From Submission Grid

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

    # Last step requires WRITE-288 to be complete
  Scenario: Start Review
    Given I launch the activity as an "instructor"
    When I click "student_submissions"
    And I click "review_status_start_review"
    Then the text of "draft_area" should be "Cookies are the best dessert known to man. Round, with the capacity to be topped with all the manner of chocolate or candy, it's the perfect treat no matter how young or old one is."
    Then the text of "reflection_question_submission_textarea" [1] should include "yay"
    #Then I wait until there is 1 "end_comment_textarea" visible


  Scenario: Navigate Back to Instructor Summary Page From Feedback Tool
    Given I launch the activity as an "instructor"
    When I click "student_submissions"
    And I click "review_status_start_review"
    And I click "back_button"
    Then I wait until there is 1 "submission_row_name" visible
    Then I wait until there is 1 "submission_row_date" visible
    Then I wait until there is 1 "submission_row_status" visible
    Then I wait until there is 1 "submission_row_sent" visible