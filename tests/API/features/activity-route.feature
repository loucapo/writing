@using=supertest
Feature: Activity API Routes
@only
  Scenario: get homepage 2
    Given I get a cookie '200'
    Given I GET '/resource/d3e3c2d5-cf43-4f63-924f-3ec7a125a334' and receive status '200'"