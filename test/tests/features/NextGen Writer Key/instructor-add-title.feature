@WRITE-855
@pending=monorepo
Feature: Add Title To Activity

  Scenario: Default Title
    Given I launch the activity as a 'instructor'
    Then Page Element Checker Verifies Text: 'untitled drafting activity' at 'title'

  Scenario: Edit Title
    Given I launch the activity as a 'instructor'
    Then I click a 'edit_title_button'
    Then I see the 'edit_title_save_button'
    Then I see the 'edit_title_cancel_button'
    Then I see the 'edit_title_textarea'

  Scenario: Character Counter Appears
    Given I launch the activity as a 'instructor'
    Then I click a 'edit_title_button'
    Then I type 'Cookie Crisp' in the title
    Then I see the 'char_counter'

  Scenario: Save Title
    Given I launch the activity as a 'instructor'
    Then I click a 'edit_title_button'
    Then I type 'Cookies Are Awesome' in the title
    Then I click a 'edit_title_save_button'
    Then Page Element Checker Verifies Text: 'Cookies Are Awesome' at 'title'

  Scenario: Cancel Title
    Given I launch the activity as a 'instructor'
    Then I click a 'edit_title_button'
    Then I type 'Cookies Are Awesome' in the title
    Then I click a 'edit_title_cancel_button'
    Then Page Element Checker Verifies Text: 'untitled drafting activity' at 'title'

  Scenario: Student Can See Title
    Given I launch the activity as a 'instructor'
    Then I click a 'edit_title_button'
    Then I type 'Cookies Are Awesome' in the title
    Then I click a 'edit_title_save_button'
    Given I launch the activity as a 'student'
    Then Page Element Checker Verifies Text: 'Cookies Are Awesome' at 'title'

  Scenario: 140 Character Limit
    Given I launch the activity as a 'instructor'
    Then I click a 'edit_title_button'
    Then I type 'This should be somewhere close to 140 characters of various sorts. I don't know why any instructor would want an assignment title this long. This is really absurd' in the title
    Then I see the 'char_counter:red'
    Then I click a 'edit_title_save_button'
    Then Page Element Checker Verifies Text: 'This should be somewhere close to 140 characters of various sorts. I don't know why any instructor would want an assignment title this long.' at 'title'

