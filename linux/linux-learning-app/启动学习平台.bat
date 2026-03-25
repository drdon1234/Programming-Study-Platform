@echo off
chcp 65001 >nul
title Linux 程序设计学习平台

echo ============================================
echo    Linux 程序设计学习平台 - 正在启动...
echo ============================================
echo.

cd /d "%~dp0"

:: 关闭之前可能残留的 vite 进程，避免端口冲突
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":5173 " ^| findstr "LISTENING"') do (
    taskkill /f /pid %%a >nul 2>&1
)

:: 检查 node_modules 是否存在
if not exist "node_modules" (
    echo [提示] 首次运行，正在安装依赖，请稍候...
    echo.
    call npm install
    if errorlevel 1 (
        echo.
        echo [错误] 依赖安装失败！请确保已安装 Node.js
        echo        下载地址: https://nodejs.org/
        pause
        exit /b 1
    )
    echo.
    echo [完成] 依赖安装成功！
    echo.
)

echo [启动] 正在启动本地服务器...
echo.
echo  浏览器将自动打开学习平台页面。
echo  请勿关闭此窗口，关闭后学习平台将停止运行。
echo ============================================
echo.

call npx vite --open --port 5173 --strictPort
