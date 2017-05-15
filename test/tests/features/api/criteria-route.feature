@using=supertest
@api
Feature: Criteria API Route
  Scenario: Receive a 200 status when go to GET all criteria with valid cookie
    Given I get an instructor cookie and receive status '200'
    Given I GET ':3000/criteria' and receive status '200'

  Scenario: Receive a 404 status when go to GET non-existing activity with valid cookie
    Given I get an instructor cookie and receive status '200'
    Given I GET ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/criteria' and receive status '404'

  Scenario: Receive a 401 status when go to GET all criteria with no cookie
    Given I get an instructor cookie and receive status '200'
    Given I GET ':3000/criteria' in incognito and receive status '401'

  Scenario: Receive a 404 status when go to GET specific criteria with valid cookie
    Given I get an instructor cookie and receive status '200'
    Given I GET ':3000/criteria/4a7e811e-076d-488b-a523-94169c971e6d' and receive status '404'
