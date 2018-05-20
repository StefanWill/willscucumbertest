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
ECHO                   Execute Cucumber Tests
ECHO ******************************************************************************
CALL cd C:\Temp\cucumbertest\
CALL protractor cucumber.conf.js

if not errorlevel 1 (
    echo !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! SUCCESS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    exit 0
) ELSE (
    echo !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! FAILURES !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 1>&2
    exit 1
)

REM Cleanup, exit script and return errorlevel
SET CURRDIR=
EXIT /B %CURRERR%
