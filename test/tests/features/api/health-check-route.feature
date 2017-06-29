@using=supertest
  @api
Feature: Health Check API Routes

  Scenario: Receive a 200 status when go to GET the health check endpoint with no cookie at all
    Given I GET ':3000/health' and receive status '200'

  Scenario: Receive a 200 status when go to GET the health check endpoint with a valid instructor cookie
    Given I get an instructor cookie and receive status '200'
    Given I GET ':3000/health' and receive status '200'

  Scenario: Receive a 200 status when go to GET the health check endpoint with a valid student cookie
    Given I get a student cookie and receive status '200'
    Given I GET ':3000/health' and receive status '200'
