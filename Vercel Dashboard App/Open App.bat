@echo off
REM ── My Projects Dashboard Launcher ──
REM Double-click this file to open the app in Chrome as a standalone PWA window.
REM Replace the URL below with your actual Vercel deployment URL after deploying.

set APP_URL=https://my-projects-dashboard.vercel.app

REM Try to open as Chrome App (standalone window, no browser UI)
start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" --app="%APP_URL%"

REM If Chrome is not in the default path, try the x86 path
if errorlevel 1 (
  start "" "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --app="%APP_URL%"
)

REM If Chrome is not installed at all, open in default browser
if errorlevel 1 (
  start "" "%APP_URL%"
)
