
# General approach

* This project was setup on a PC that has Windows 8.1 as an operating system
* Communication is key - and so is working on your own (research, learn it yourself...). Therefore in order to avoid frequent e-mail correspondence, where you have to write anyway of course, I wrote the features and step definitions and then clarify them in a personal meeting
* Due to the Chrome developer-tools, the given webapp was developed using AngularJS. Therefore the End-to-End testing framework "Protractor" will be used (ng-app, ng-controller, ng-model attributes in the HTML)

```
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.5/angular.min.js"></script>
```
* Page Objects were used according to the [Protractor Style Guide](https://github.com/CarmenPopoviciu/protractor-styleguide)
* Page Objects-folder may seem as unnecessary structure for this task but is a good practice in case the project should grow


# Development approach in cucumber
1. Write the feature and save it as .feature-file in the feature-folder
2. Execute the following command in order to get the snippets to paste into the **stepdefs.js**-file in the step_definitions-folder
```
$ ./node_modules/.bin/cucumber-js
```
3. In the **stepdefs.js**-file in the step_definitions-folder, the **.then(callback)-function** let's Cucumber know it's time to move on to the next step


# Prerequisites

**Following programs have to be installed to make the project work:**

* Node.js,
* Java Development Kit.

Alternatively you can run the **setupTestProjectGlobally.bat**-script that does the following steps for you.

In order to run Protractor, you will need to first start the Selenium Server. Protractor includes a webdriver-manager tool that starts up your server. In a separate terminal tab, run the webdriver-manager update command. This downloads the necessary selenium server and chromedriver components. Then run webdriver-manager start to start up the server.

Then you can use protractor protractor.conf.js in the terminal to run the test spec.
  

## Install end-to-end test framework Protractor globally
```
$ npm install -g protractor
```

## Setup the project folder
```
cd C:\
```
```
mkdir "Temp"
```
```
mkdir "cucumbertest"
```
```
cd C:\Temp\cucumbertest
```

## Update webdriver-manager globally
```
webdriver-manager update --ignore_ssl
```
```
robocopy C:\Users\%username%\AppData\Roaming\npm\node_modules\protractor\node_modules\webdriver-manager\selenium C:\Temp\willscucumbertest\node_modules\protractor\node_modules\protractor\node_modules\webdriver-manager\selenium
```
```
webdriver-manager start
```

## Install the needed packages for the project
```
C:\Temp\willscucumbertest> npm install
```

# Run the testsY
You will need to start the Selenium Server first.
In a separate terminal tab, run the following:

```
C:\Temp\willscucumbertest> webdriver-manager update --ignore_ssl
```

Then run webdriver-manager start to start up the server:
```
C:\Temp\willscucumbertest> webdriver-manager start
```

To execute the cucumber tests, use following command in a new terminal tab:
```
C:\Temp\willscucumbertest> protractor cucumber.conf.js

```

If you want to see the protractor tests that I wrote in parallel, since I know it better than cucumber, use following command in a new terminal tab to run the ZooAdoption.spec test:
```
C:\Temp\willscucumbertest> protractor protractor.conf.js
```


# Jenkins
Due to the fact that I don't host Jenkins, please go through following steps that have to applied on a windows operating system:

1. Install Jenkins for Windows (follow the dialogs by clicking Next and Finish)
2. After the default installation, get the temporary password that is stored in **"C:\Program Files (x86)\Jenkins\secrets\initialAdminPassword"** (appears on he initial Jenkins start screen)
3. Click **"Install suggested plugins"**
4. Create the account of your personal choice on **"Erstes Administrator-Konto erstellen"**
5. After that signout and signin with your new credentials


## Install the Jenkins Cucumber Reports plugin
1. Go to **"Jenkins verwalten"** and **"Plugins verwalten"**
2. On the **"Filter"**-Box on the right search for **"Cucumber"**
3. Click the checkbox next to **Cucumber reports** and hit the **"Installieren ohne Neustart"** button
4. After a successful installation check **"Starte Jenkins neu, nachdem die Installation beendet ist und keine Prozesse laufen."**
5. Login again with your credentials


## Setup the Jenkins-job
1. Go the Jenkins-overview and create a new job by clicking on **"Element anlegen"**
2. For the installed Jenkins Cucumber Reports plugin to work, you must use a **Freestyle project type** in jenkins
3. In the loaded job-form give the project a **Projektname** - for instance "Animaladoption"
4. In order to execute the jobs every day at noon, check **Builds zeitgesteuert starten** in the 

**Build-Auslöser**-section and type in the following in the **"Zeitplan"**-field:
```
00 12 * * *
```
5. In the section **Build Verfahren** - select **"Windows Batch-Datei ausführen"** and paste the following:
```
C:\Temp\willscucumbertest\executeCucumber.bat
```
6. For the section **Post-Build-Aktionen**, select in the **"Post-Build-Aktionen"**-dropdown the option **"Cucumber reports"**
7. Click the **"Erweitert"**-Button in the **Post-Build-Aktionen**-section and give it the following dates for the fields:
- **Json Reports Path:** C:\Temp\willscucumbertest\.tmp
- **File Include Pattern:** results.json
- Leave the rest as it is


# Useful links
[Protractor Style Guide](https://github.com/CarmenPopoviciu/protractor-styleguide)
[Protractor cheatsheet](https://gist.github.com/javierarques/0c4c817d6c77b0877fda)
[Protractor and Cucumber](https://semaphoreci.com/community/tutorials/getting-started-with-protractor-and-cucumber)
[BDD in JavaScript: Getting Started with Cucumber and Gherkin](https://www.sitepoint.com/bdd-javascript-cucumber-gherkin/)