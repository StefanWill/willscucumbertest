# Feature: Animal adoption
#     Type in your name that needs be displayed underneath the input field then adopt Nemo the Fish.
#     After a successful adoption adopt another aninmal


# Scenario Outline: Typing in your name that gets displayed and adopt Nemo the Fish
#     Given I go to the website "http://www.thetestroom.com/jswebapp/index.html"
#     When I type in my name "<name>" in the empty input field
#     Then I should see my name "<output>" displayed below the text enter field
#     When I click the CONTINUE button
#     Then I should land on the "animalselection" page
#     When I select Nemo the Fish
#     And I click the CONTINUE button again
#     Then I should see the "confirm" page
#     And I should have the confirmation "Thank you for your selection. Your animal adoption papers will be sent to you shortly with a lovely card from your selected animal."

#     Examples:
#         | name   | output |
#         | Stefan | Stefan |
#         | Sepp   | Sepp   |

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

# Feature: Multiplication

#     Scenario Outline: <a> * <b>
#         Given I start with <a>
#         When I multiply by <b>
#         Then I end up with <answer>

#         Examples:
#             | a | b | answer |
#             | 1 | 0 | 0      |
#             | 1 | 1 | 1      |
#             | 2 | 2 | 4      |



# Feature: Animal adoption
#     Type in your name that needs be displayed underneath the input field then adopt Nemo the Fish.
#     After a successful adoption adopt another aninmal

#     Scenario: Scenario name

#         Given I have opened a Web Browser
#         When I load the Wikipedia article on "Wiki"
#         Then I have "19" Wiki Links



# Feature: Addition

#     Scenario: 1 + 0
#         Given I start with 1
#         When I add 0
#         Then I end up with 1

#     Scenario: 1 + 1
#         Given I start with 1
#         When I add 1
#         Then I end up with 2

# Feature: Multiplication

#     Scenario: 1 * 0
#         Given I start with 1
#         When I multiply by 0
#         Then I end up with 0

#     Scenario: 1 * 1
#         Given I start with 1
#         When I multiply by 1
#         Then I end up with 1

#     Scenario: 2 + 2
#         Given I start with 2
#         When I multiply by 2
#         Then I end up with 4


# Feature: Addition

#     Background:
#         Given I start with 1

#     Scenario: 1 + 0
#         When I add 0
#         Then I end up with 1

#     Scenario: 1 + 1
#         When I add 1
#         Then I end up with 2

Feature: Multiplication

    Scenario Outline: <a> * <b>
        Given I start with <a>
        When I multiply by <b>
        Then I end up with <answer>

        Examples:
            | a | b | answer |
            | 1 | 0 | 0      |
            | 1 | 1 | 1      |
            | 2 | 2 | 4      |