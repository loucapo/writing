@WRITE-41
Feature: Student Views Submitted Draft
  @db=reset
  Scenario: Instructor Sets Up Student Reflection Environment
    Given I launch the activity as an "instructor"
    When I click "add_reflection_questions"
    When I click "ref_question_check" [1]
    When I click "ref_question_check" [4]
    And I click "ref_question_save"

  Scenario: Student Views Read Only Draft
    Given I launch the activity as a "student"
    When I click "start_draft"
    And I type "Cookies are the best dessert known to man. Round, with the capacity to be topped with all the manner of chocolate or candy, it's the perfect treat no matter how young or old one is." in "draft_area"
    And I click "start_reflection"
    Then I wait until there is 1 "student_reflection_text" visible
    And I type "yay" in "student_reflection_text"
    And I click "reflection_polls_radio_button" [1]
    And I click "reflection_button_submit_enabled"
    And I click "draft_submit_confirm"
    Then I wait until there is 1 "view_final_draft_button" visible
    When I click "view_final_draft_button"
    Then I wait until there is 1 "success_flash" visible
    Then the text of "draft_area" should be "Cookies are the best dessert known to man. Round, with the capacity to be topped with all the manner of chocolate or candy, it's the perfect treat no matter how young or old one is."
    Then the text of "reflection_question_submission_textarea" [1] should include "yay"

  Scenario: Student Views Read Only Draft Alt Route
    Given I launch the activity as a "student"
    When I click "start_draft"
    Then I wait until there is 1 "success_flash" visible
    Then the text of "draft_area" should be "Cookies are the best dessert known to man. Round, with the capacity to be topped with all the manner of chocolate or candy, it's the perfect treat no matter how young or old one is."
    Then the text of "reflection_question_submission_textarea" [1] should include "yay"

  Scenario: Student Can Navigate Back to Activity Page
    Given I launch the activity as a "student"
    When I click "view_final_draft_button"
    And I click "return_to_activity_page_link"
    Then I wait until there is 1 "view_final_draft_button" visible
    # Looks like not both of the buttons are in sync (View Final Paper vs. start draft). Text on buttons is the same and functionally works correctly, just data id needs update eventually
    Then I wait until there is 1 "start_draft" visible
