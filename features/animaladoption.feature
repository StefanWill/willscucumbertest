Feature: Animal adoption
    Type in your name that needs be displayed underneath the input field then adopt Nemo the Fish.
    After a successful adoption adopt another aninmal

    Background:
        Given I go to the website "http://www.thetestroom.com/jswebapp/index.html"

    Scenario: Typing in your name that gets displayed and adopt Nemo the Fish (Just Background steps get performed)
        When I type in my name "Stefan" in the empty input field
        Then I see my name "Stefan" displayed below the text enter field
        When I click the CONTINUE button
        Then I land on the "Select your Animal" page
        When I select Nemo the Fish
        And I click the CONTINUE button
        Then I land on the "Confirmation" page
        And I have the confirmation "Thank you for your selection. Your animal adoption papers will be sent to you shortly with a lovely card from your selected animal."
        When I click the BACK TO HOME button
        Then I land on the "Home" page

    Scenario: Adopt Nemo the Fish and adopt another animal like Simba the Lion
        When I type in my name "Stefan" in the empty input field
        And I click the CONTINUE button
        Then I land on the "Select your Animal" page
        When I select Simba the Lion
        And I click the CONTINUE button
        Then I land on the "Confirmation" page

    Scenario: Adopting an animal not be possible if I don't type in a name in the first place
        When I don't type in a name in the empty input field
        And I click the CONTINUE button
        Then I not be able to continue to the "Select your Animal" page
