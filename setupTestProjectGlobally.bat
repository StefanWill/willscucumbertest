@ECHO OFF

REM Store current directory
SET CURRDIR=%CD%

REM Set current errorlevel
SET CURRERR=0

REM ECHO ******************************************************************************
REM ECHO           Check node version to ensure it's installation
REM ECHO ******************************************************************************
REM CALL node --version

REM ECHO ******************************************************************************
REM ECHO           Install end-to-end test framework Protractor globally
REM ECHO ******************************************************************************
REM CALL npm install -g protractor

REM ECHO ******************************************************************************
REM ECHO                      Setup the project folder
REM ECHO ******************************************************************************
REM CALL cd C:\
REM CALL mkdir "Temp"
REM CALL mkdir "willscucumbertest"

REM ECHO ******************************************************************************
REM ECHO                      Install packages in the project
REM ECHO ******************************************************************************
REM CALL cd C:\Temp\willscucumbertest
REM CALL npm install

ECHO ******************************************************************************
ECHO                   Update webdriver-manager globally
ECHO ******************************************************************************
CALL webdriver-manager update --ignore_ssl
CALL robocopy C:\Users\%username%\AppData\Roaming\npm\node_modules\protractor\node_modules\webdriver-manager\selenium C:\Temp\willscucumbertest\node_modules\protractor\node_modules\protractor\node_modules\webdriver-manager\selenium
CALL webdriver-manager start

REM Cleanup, exit script and return errorlevel
SET CURRDIR=
EXIT /B %CURRERR%
