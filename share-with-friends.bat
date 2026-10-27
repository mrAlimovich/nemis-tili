@echo off
title German Master AI - Do'stlar bilan ulashish (Cloudflare)
color 0a
echo ======================================================
echo    GERMAN MASTER AI - DO'STLAR UCHUN ISHGA TUSHIRISH
echo ======================================================
echo.
echo Server tekshirilmoqda...
start cmd /k "node server/server.js"
echo.
echo Rasmiy xavfsiz Cloudflare havolasi ishga tushmoqda...
echo.
npx --yes cloudflared tunnel --url http://localhost:4000
pause
