@echo off
echo Opening Ash House Somerset Project...
echo.

REM Change to project directory
cd /d "C:\Users\William\CascadeProjects\AshHouseSomerset"

REM Show current status
echo Current directory: %CD%
echo.
echo Git status:
git status --short
echo.

REM Open the website in browser
echo Opening website in browser...
start https://williamcjrogers.github.io/ash-house-somerset/
timeout /t 2 /nobreak >nul

REM Open project in VS Code (if available)
echo Attempting to open in VS Code...
code . 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo VS Code not found in PATH, skipping...
)

REM Open file explorer to project
echo Opening project folder...
explorer .

REM Show recent git commits
echo.
echo Recent commits:
git log --oneline -5
echo.

REM Show project structure
echo Project structure:
dir /b
echo.

echo Starting Claude Code...
echo.
echo ===========================================
echo  ASH HOUSE SOMERSET PROJECT LOADED
echo ===========================================
echo.
echo Project: Luxury wellness retreat website
echo URL: https://williamcjrogers.github.io/ash-house-somerset/
echo.
echo Recent work:
echo - Fixed layout structure and image consistency
echo - Standardized image heights and spacing  
echo - Removed unprofessional elements
echo - Improved navigation and hero section
echo.
echo Type 'git log' to see full history
echo Type 'git status' to see current changes
echo.

REM Start Claude Code in this directory
claude-code

pause