@WRITE-855
@only
Feature: Add Title To Activity

  Scenario: Default Title
    Given I launch the activity as a 'instructor'
    Then Page Element Checker Verifies Text: 'untitled drafting activity' at '[data-id='activity-title']'

  Scenario: Edit Title
    Given I launch the activity as a 'instructor'
    When I click a 'edit_title_button'
    Then I see the 'edit_title_save_button'
    Then I see the 'edit_title_cancel_button'
    Then I see the 'edit_title_textarea'

  Scenario: Character Counter Appears
    Given I launch the activity as a 'instructor'
    When I click a 'edit_title_button'
    Then I type 'Cookie Crisp' in the activity title
    Then I see the 'char_counter'

  Scenario: Save Title
    Given I launch the activity as a 'instructor'
    When I click a 'edit_title_button'
    Then I type 'Cookies Are Awesome' in the activity title
    When I click a 'edit_title_save_button'
    Then Page Element Checker Verifies Text: 'Cookies Are Awesome' at '[data-id='activity-title']'

  Scenario: Cancel Title
    Given I launch the activity as a 'instructor'
    When I click a 'edit_title_button'
    Then I type 'Cookies Are Awesome' in the activity title
    When I click a 'edit_title_cancel_button'
    Then Page Element Checker Verifies Text: 'untitled drafting activity' at '[data-id='activity-title']'

  Scenario: Student Can See Title
    Given I launch the activity as a 'instructor'
    When I click a 'edit_title_button'
    Then I type 'Cookies Are Awesome' in the activity title
    When I click a 'edit_title_save_button'
    Given I launch the activity as a 'student'
    Then Page Element Checker Verifies Text: 'Cookies Are Awesome' at '[data-id='activity-title']'

  Scenario: 140 Character Limit
    Given I launch the activity as a 'instructor'
    When I click a 'edit_title_button'
    And I type 'This should be somewhere close to 140 characters of various sorts. I don't know why any instructor would want an assignment title this long. This is really absurd' in the activity title
    Then Page Element Checker Verifies Text: '0 characters remaining' at '[data-id='char-limit-count']'
    When I click a 'edit_title_save_button'
    Then Page Element Checker Verifies Text: 'This should be somewhere close to 140 characters of various sorts. I don't know why any instructor would want an assignment title this long.' at '[data-id='activity-title']'

