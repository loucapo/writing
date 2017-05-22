@WRITE-41
  # Thinking about creating another mock activity to lead users to...or can use the DB reset here
Feature: Student Views Submitted Draft
  Scenario: Student Moves To Reflection Screen
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    When I type in 'Cookies are the best dessert known to man. Round, with the capacity to be topped with all the manner of chocolate or candy, it's the perfect treat no matter how young or old one is.'
    And Student clicks 'start_reflection_button'
    And Student clicks 'submit_button'
    When Student clicks 'view_draft_1_button'
    Then Student sees 'draft_submitted_notification'
    Then Student sees 'Cookies are the best dessert known to man. Round, with the capacity to be topped with all the manner of chocolate or candy, it's the perfect treat no matter how young or old one is.'
    And Student sees 'reflection_questions'

  Scenario: Student Can Navigate Back to Activity Page
    Given I launch the activity as a 'student'
    When Student clicks 'start_draft_1_button'
    When I type in 'happy'
    And Student clicks 'start_reflection_button'
    And Student clicks 'submit_button'
    When Student clicks 'view_draft_1_button'
   Then Student clicks 'return_to_activity_page_button'
    And Student Sees 'view_draft_1_button'