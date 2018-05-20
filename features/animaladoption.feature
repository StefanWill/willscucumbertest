Feature: Animal adoption
    Type in your name that needs be displayed underneath the input field then adopt Nemo the Fish.
    After a successful adoption adopt another aninmal

    Scenario: Typing in your name that gets displayed and adopt Nemo the Fish
        Given I go to the website "http://www.thetestroom.com/jswebapp/index.html"
        When I type in my name "Stefan" in the empty input field
        Then I should see my name "Stefan" displayed below the text enter field
        When I click the CONTINUE button
        Then I should land on the "animalselection" page
        When I select Nemo the Fish
        And I click the CONTINUE button again
        Then I should see the "confirm" page
        And I should have the confirmation "Thank you for your selection. Your animal adoption papers will be sent to you shortly with a lovely card from your selected animal."

    # Scenario: Adopting an animal should not be possible if I don't type in a name in the first place
    #     Given I go to the website "http://www.thetestroom.com/jswebapp/index.html" again
    #     When I don't type in a name in the empty input field
    #     Then I should not be able to continue to the the "animalselection" page by clicking the CONTINUE button

    # Scenario: Nemo the Fish and adopt another animal like Simba the Lion
    #     Given I go to the website "http://www.thetestroom.com/jswebapp/animalselection.html" again
    #     When I type in my name "Stefan" in the empty input field as before
    #     Then I should see my name "Stefan" displayed
    #     When I hit the CONTINUE button
    #     Then I should land on the "animalselection" page
    #     When I select Nemo the Fish to adopt
    #     And I click the CONTINUE button once again
    #     Then I should land on the "confirm" page as expected
    #     When I click the BACK TO HOME button
    #     Then I should see the "index" page
    #     When I type in my name "Stefan" in the empty input field again
    #     Then I should see my name "Stefan" displayed below the text enter field like before
    #     When I click the CONTINUE button to procceed
    #     Then I should see the "animalselection" page again
    #     When I select Simba the Lion
    #     And I click the CONTINUE button to adopt Simba
    #     Then I should land on the "confirm" page again
    #     And I should once again have the confirmation "Thank you for your selection. Your animal adoption papers will be sent to you shortly with a lovely card from your selected animal."

