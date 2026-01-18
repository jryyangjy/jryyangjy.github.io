@echo off
REM Jiayue Yang's Website Deployment Script for Windows
REM Usage: deploy.bat "Your commit message"

setlocal enabledelayedexpansion

REM Colors for Windows CMD (limited support)
echo [INFO] Starting deployment of Jiayue Yang's website...

REM Check if we're in a git repository
git rev-parse --git-dir >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Not a git repository. Please run 'git init' first.
    exit /b 1
)

REM Check if there are any changes to commit
for /f %%i in ('git status --porcelain 2^>nul') do set GIT_STATUS=%%i
if "%GIT_STATUS%"=="" (
    echo [WARN] No changes to commit. Everything is up to date.
    exit /b 0
)

REM Get commit message
set "COMMIT_MESSAGE=%~1"
if "%COMMIT_MESSAGE%"=="" (
    set "COMMIT_MESSAGE=Update website content"
)

echo [INFO] Commit message: %COMMIT_MESSAGE%

REM Add all files
echo [INFO] Adding files to git...
git add .

REM Commit changes
echo [INFO] Committing changes...
git commit -m "%COMMIT_MESSAGE%"

REM Push to remote
echo [INFO] Pushing to GitHub...
git push origin main 2>nul
if errorlevel 1 (
    git push origin master 2>nul
    if errorlevel 1 (
        echo [ERROR] Failed to push. Please check your remote configuration.
        echo [TIP] Make sure you have added a remote origin:
        echo [TIP] git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
        exit /b 1
    )
)

echo [SUCCESS] Deployment successful!
echo [SUCCESS] Your website should be live at: https://jryyangjy.github.io

REM Optional: Check if Jekyll is available (usually not on Windows)
where jekyll >nul 2>nul
if %errorlevel% equ 0 (
    echo [INFO] Building with Jekyll...
    jekyll build --quiet 2>nul
    if %errorlevel% equ 0 (
        echo [SUCCESS] Jekyll build completed
    )
)

echo [SUCCESS] All done! Your website has been deployed successfully.
echo.
echo Next steps:
echo 1. Go to https://github.com/YOUR_USERNAME/YOUR_REPO/settings/pages
echo 2. Set Source to 'Deploy from a branch'
echo 3. Set Branch to 'main' (or 'master') and folder to '/ (root)'
echo 4. Save and wait for deployment to complete
echo.
echo Your site will be available at: https://YOUR_USERNAME.github.io/YOUR_REPO/

pause