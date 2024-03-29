Feature: Happy path

  Successful journey through the system and back to the RP

  @mock-api:toy-success @relying-party
  Scenario: Toy Happy Path
    Given Happy Harriet is using the system
    When they have started the toy journey
    Then they should see the intro page
    And they continue from intro
    Then they should see the choose favourite page
    When they choose "train-set" as their favourite toy
    And they continue from choose favourite
    Then they should be redirected as a success
    And it should have a correct verifiable credential
