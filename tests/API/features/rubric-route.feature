@using=supertest
@only
Feature: Rubric API Routes

  Scenario: Receive a 200 status when go to GET rubric with valid cookie
    Given I get a cookie and receive status '200'
    Given I GET ':3000/rubric' and receive status '200'

  Scenario: Receive a 401 status when go to GET rubric with no cookie
    Given I get a cookie and receive status '200'
    Given I GET ':3000/rubric' in incognito and receive status '401'

  Scenario: Receive a 200 status when go to GET rubric with valid cookie
    Given I get a cookie and receive status '200'
    Given I GET ':3000/rubric/a3aa7312-68b4-43b9-85b6-fa1f52339a54' and receive status '200'

  Scenario: Receive a 200 status when go to GET rubric with non-existing id with valid cookie
    Given I get a cookie and receive status '200'
    Given I GET ':3000/rubric/a3aa7312-68b4-43b9-85b6-fa1f52339a55' and receive status '200'

  Scenario: Receive a 500 status when go to GET rubric with bad id with valid cookie
    Given I get a cookie and receive status '200'
    Given I GET ':3000/rubric/a3aa7312-68b4-43b9-85b6-fa1f39a55' and receive status '500'

  Scenario: Receive a 401 status when go to GET rubric with id with no cookie
    Given I get a cookie and receive status '200'
    Given I GET ':3000/rubric/a3aa7312-68b4-43b9-85b6-fa1f52339a54' in incognito and receive status '401'
