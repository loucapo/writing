@using=supertest
Feature: just do stuff to google

  Scenario: get homepage
    Given I hit google

  #@only
  Scenario: get homepage
    Given I slap google

  #@only
  Scenario: get homepage again, with context!
    Given I beat google
    Given I print the cookie
