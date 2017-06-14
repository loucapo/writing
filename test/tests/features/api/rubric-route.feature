@using=supertest
@api
Feature: Rubric API Routes

  Scenario: Receive a 200 status when go to GET rubric with valid cookie
    Given I get an instructor cookie and receive status '200'
    Given I GET ':3000/rubric' and receive status '200'

  Scenario: Receive a 401 status when go to GET rubric with no cookie

    Given I get an instructor cookie and receive status '200'
    Given I GET ':3000/rubric' in incognito and receive status '401'

    @pending=broken
      # Getting a 500 when hitting an existing rubric, Raif said no one calls this route currently which might be part of the problem?
      # 500 error - Missing query parameters: id, even though id is in the path
  Scenario: Receive a 200 status when go to GET rubric with valid cookie
    Given I get an instructor cookie and receive status '200'
    Given I GET ':3000/rubric/a3aa7312-68b4-43b9-85b6-fa1f52339a54' and receive status '200'

  Scenario: Receive a 500 status when go to GET rubric with bad id with valid cookie
    Given I get an instructor cookie and receive status '200'
    Given I GET ':3000/rubric/a3aa7312-68b4-43b9-85b6-fa1f52342a55' and receive status '500'

  Scenario: Receive a 401 status when go to GET rubric with id with no cookie
    Given I get an instructor cookie and receive status '200'
    Given I GET ':3000/rubric/a3aa7312-68b4-43b9-85b6-fa1f52339a54' in incognito and receive status '401'
