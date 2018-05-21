@ECHO OFF

REM Store current directory
SET CURRDIR=%CD%

REM Set current errorlevel
SET CURRERR=0

ECHO ******************************************************************************
ECHO           Check node version to ensure it's installation
ECHO ******************************************************************************
CALL node --version

ECHO ******************************************************************************
ECHO           Install end-to-end test framework Protractor globally
ECHO ******************************************************************************
CALL npm install -g protractor

ECHO ******************************************************************************
ECHO                      Install packages in the project
ECHO ******************************************************************************
CALL cd C:\Temp\willscucumbertest
CALL npm install

ECHO ******************************************************************************
ECHO                   Update webdriver-manager globally
ECHO ******************************************************************************
CALL webdriver-manager update --ignore_ssl
CALL robocopy C:\Users\%username%\AppData\Roaming\npm\node_modules\protractor\node_modules\webdriver-manager\selenium C:\Temp\willscucumbertest\node_modules\protractor\node_modules\protractor\node_modules\webdriver-manager\selenium
CALL webdriver-manager start

REM Cleanup, exit script and return errorlevel
SET CURRDIR=
EXIT /B %CURRERR%
