Feature: Animal adoption
    Type in your name that needs be displayed underneath the input field then adopt Nemo the Fish.
    After a successful adoption adopt another aninmal

    Background:
        Given I go to the website "http://www.thetestroom.com/jswebapp/index.html"
        When I type in my name "Stefan" in the empty input field
        Then I should see my name "Stefan" displayed below the text enter field
        When I click the CONTINUE button
        Then I should land on the "animalselection" page
        When I select Nemo the Fish
        And I click the CONTINUE button
        Then I should land on the "confirm" page
        And I should have the confirmation "Thank you for your selection. Your animal adoption papers will be sent to you shortly with a lovely card from your selected animal."
        When I click the BACK TO HOME button
        Then I should land on the "index" page

    Scenario: Typing in your name that gets displayed and adopt Nemo the Fish (Just Background steps get performed)

    Scenario: Adopt Nemo the Fish and adopt another animal like Simba the Lion
        When I type in my name "Stefan" in the empty input field
        And I click the CONTINUE button
        Then I should land on the "animalselection" page
        When I select Simba the Lion
        And I click the CONTINUE button
        Then I should land on the "confirm" page

    Scenario: Adopting an animal should not be possible if I don't type in a name in the first place
        When I don't type in a name in the empty input field
        And I click the CONTINUE button
        Then I should not be able to continue to the "animalselection" page
