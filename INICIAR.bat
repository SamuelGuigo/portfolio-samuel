@echo off
title Portfolio Samuel Guigo
cd /d "%~dp0"

echo.
echo ==========================================
echo   Portfolio Tecnico - Samuel Guigo
echo ==========================================
echo.

if not exist node_modules (
  echo Instalando dependencias...
  call npm install
  if errorlevel 1 goto erro
)

echo.
echo Iniciando ambiente de desenvolvimento...
call npm run dev
goto fim

:erro
echo.
echo Ocorreu um erro ao instalar/iniciar.
pause

:fim