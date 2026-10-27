@echo off
title GitHub ga dasturni yuklash va Render ni yangilash
color 0a
echo ======================================================
echo    GERMAN MASTER AI - AVTOMATIK YANGILASH
echo ======================================================
echo.
echo 1. Yangilanishlar GitHub ga yuklanmoqda...
git push -u origin main
echo.
echo 2. Render.com ga avtomatik yangilash buyrug'i yuborilmoqda...
curl -s "https://api.render.com/deploy/srv-dbg86oom7kps73bmk3mg?key=dSYDJYRZjDc" > nul
echo.
echo ======================================================
echo Barcha yangilanishlar muvaffaqiyatli Render ga yuborildi!
echo Saytingiz 20 soniya ichida avtomatik yangilanadi.
echo ======================================================
pause
